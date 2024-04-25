import { Injectable } from '@angular/core';


import { EMPTY, firstValueFrom, forkJoin, from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OdooSerializableInterface } from '../interfaces/odoo-serializable-interface';
import { OdoorpcService } from './odoorpc.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OdooRelationship } from '../../models/odoo-relationship.model';
import { OdooMultiRelationship } from '../../models/odoo-multi-relationship.model';



export class QueryCriteria {
  column: string;
  type_column?: string;
  operator: string;
  value: string;
}


export class WebhookOptions {
  id: string;
  name: string;
  email: string;
}


export class CallOptions {
  id?: string;
  table: string;
  method: string;
  params?: string;
}

export class MessageOptions {
  dealId: number;
  subject: string;
  body: string;
}

export class OnChangeOptions {
  id: string;
  table: string;
  field: string;
  value: string | number;
}

export class QueryCriteriaOR extends QueryCriteria {
}

export class QueryResolve {
  key: string;
  table: string;
  fields?: string[];
}

export class QueryGetListOptions {
  table: string;
  ids: string[];
  fields?: string[];
  extra?: string;
  order?: string;
}

export class QuerySearchOptions {
  table: string;
  criteria: QueryCriteria[];
  resolve?: QueryResolve[];
  limit?: number;
  extra?: string;
  order?: string;
  fields?: string[];
}

export class QueryGetOptions {
  table: string;
  id?: string;
  fields?: string[];
  resolve?: QueryResolve[];
}

/* delete */
export class QueryDeleteOptions {
  table: string;
  ids: number[];
}

/* update */
export class QueryPutOptions {
  table: string;
  id?: string;
  ids?: number[];
  json_fields: any;
}

/* create */
export class QueryPostOptions {
  table: string;
  json_fields: any;
  id?: string;
}

export enum EventType {
  create,
  update,
  delete
}

export class ApiEvent {
  eventType: EventType;
  target: Object;
  table: string;
}




@Injectable({
  providedIn: 'root'
})
export abstract class OdooEntityManager {
  static readonly DEFAULT_LIMIT = 1000;

  constructor(
    public odoorpcService: OdoorpcService,
    private httpClient: HttpClient
  ) {
  }

  search<T>(serializedObj: OdooSerializableInterface<T>, criteria?,
            limit: number = OdooEntityManager.DEFAULT_LIMIT, extra?: string, order?: string): Observable<T[]> {
    const querySearchOptions = this.inputValuesToQuerySearchOptions(serializedObj.ODOO_MODEL,
      criteria, limit, extra, order, serializedObj.fields()
    );

    return from(this.odoorpcService.searchRead(querySearchOptions))
      .pipe(
        map(response => {
          return Array.isArray(Object.values(response)[0]) ? Object.values(response)[0] : Object.values(response);
        }),
        map(response => {
          var x = response.map(res => serializedObj.deserialize(res));
          console.log("RESPonse search ", x)
          return x
        }),
      );
  }

  update<T>(serializedObj: OdooSerializableInterface<T>, jsonFields: object): Observable<T> {
    const queryPutOptions = this.inputValuesToQueryPutOptions(serializedObj.ODOO_MODEL, serializedObj.id, jsonFields);
    return from(this.odoorpcService.put(queryPutOptions)).pipe(
      map(response => {

        console.log("RRR ", response, serializedObj.deserialize(response))
        return serializedObj.deserialize(response);
      })
    );
  }

  
  updateMulti<T>(serializedObj:OdooSerializableInterface<T>,serializedObjs: OdooSerializableInterface<T>[], jsonFields: any): Observable<T> {
    // if (serializedObjs)
    // const queryPutOptions = this.inputValuesToQueryPutOptions(serializedObj.ODOO_MODEL, serializedObj.id, jsonFields);
    
    return from(this.odoorpcService.put(
      {
        "table": serializedObj.ODOO_MODEL,
        "json_fields": jsonFields,
        "ids": serializedObjs.map(o => o.id)
      }
    )).pipe(
      map(response => {
        return serializedObj.deserialize(response);
      })
    );
  }

  async updateMultiple<T>(serializedObjs:OdooSerializableInterface<T>[], jsonfields:object): Promise<Observable<T>> {
      var kwargs = kwargs || {};
      kwargs.context = [];
      
      const params = {
          model: serializedObjs[0].ODOO_MODEL,
          method: "write",
          args: [serializedObjs.map(x => x.id), jsonfields],
          kwargs: {},
      };
  
      var r:any = await this.odoorpcService.sendRequest('/api/web/dataset/call_kw', params);
      return r

  }

  // We need double parameter since we don't have the same object type between the new one and the serialized, we need id for association
  create<T>(serializedObj: OdooSerializableInterface<T>, newObj: any): Observable<T> {
    const queryPostOptions = this.inputValuesToQueryPostOptions(serializedObj.ODOO_MODEL, newObj);
    return from(this.odoorpcService.post(queryPostOptions)).pipe(
      map(response => {
        console.log("LINK PIPE" ,response)
        // update id from response
        if (response)
        newObj.id = response[0]

        return serializedObj.deserialize(newObj);
      })
    );
  }


  unlinkToMulti<T>(serializedParentObj: OdooSerializableInterface<T>, removeFromKey: string, idToRemove: number): Observable<T> {
    return this.update<T>(serializedParentObj, {[removeFromKey]: [[3, idToRemove]]})
      .pipe(catchError(() => of(null)),
        map(res => {
          if (!res) {
            return null;
          }
          serializedParentObj[removeFromKey].ids = serializedParentObj[removeFromKey].ids.filter(id => id !== idToRemove);
          serializedParentObj[removeFromKey].values = serializedParentObj[removeFromKey].values.filter(value => value.id !== idToRemove);
          return serializedParentObj as unknown as T;
        }));
  }

  linkToMulti<T>(serializedParentObj: OdooSerializableInterface<T>, addToKey: string, objectToAdd: any): Observable<T> {
    return this.update<T>(serializedParentObj, {[addToKey]: [[4, objectToAdd.id]]})
      .pipe(catchError(() => of(null)),
        map(res => {
          if (!res) {
            return null;
          }
          serializedParentObj[addToKey].ids.push(objectToAdd.id);
          serializedParentObj[addToKey].values.push(objectToAdd);
          return serializedParentObj as unknown as T;
        }));
  }

  setRelation<T, U = T>(serializedParentObj: OdooSerializableInterface<T>, addToKey: string, objectToAdd: OdooSerializableInterface<U>): Observable<T> {
    return this.update<T>(serializedParentObj, {[addToKey]: objectToAdd.id})
      .pipe(catchError(() => of(null)),
        map(res => {
          if (!res) {
            return null;
          }
          serializedParentObj[addToKey] = res[addToKey];
          return serializedParentObj as unknown as T;
        }));
  }

  createAndLinkToMulti<T>(serializedParentObj: OdooSerializableInterface<T>, addToKey: string, newObject: object): Observable<T> {
    return this.update<T>(serializedParentObj, {[addToKey]: [[0, 0, newObject]]})
      .pipe(catchError(() => of(null)),
        map(res => {
          if (!res) {
            return null;
          }
          serializedParentObj[addToKey] = res[addToKey];
          return serializedParentObj as unknown as T;
        }));
  }

  // Generic delete
  delete<T>(serializedObj: OdooSerializableInterface<T>, ids: number[]): Observable<T> {
    return from(this.odoorpcService.delete({table: serializedObj.ODOO_MODEL, ids: ids.map(id => Number(id)) })).pipe(
      map(response => {
        return serializedObj.deserialize(response);
      })
    );
  }

  // Delete From MultiRelationShip
  deleteMulti<T>(serializedObj: OdooMultiRelationship<T>, idsToRemove: number[]): Observable<T> {
    return from(this.odoorpcService.delete({
      table: new serializedObj.typeOfObj().ODOO_MODEL,
      ids: idsToRemove.map(id => Number(id))
    })).pipe(catchError(() => of(null)),
      map(res => {
        if (!res) {
          return null;
        }
        serializedObj.ids = serializedObj.ids.filter(id => {
          return !idsToRemove.includes(id);
        });
        // @ts-ignore
        // serializedObj.values = serializedObj.values.filter(value => !idsToRemove.includes(value.id));
        return serializedObj as unknown as T;
      }));
  }

  resolve<T>(childToResolve: OdooMultiRelationship<T>): Observable<OdooMultiRelationship<T>> {
    if (!childToResolve.ids.length) {
      childToResolve.values = [];
      return of(childToResolve);
    }
    const newInstanceObj = new childToResolve.typeOfObj();
    return this.search<T>(newInstanceObj, [['id', 'in', childToResolve.ids]]).pipe(
      catchError((e) => []),
      map(response => {
        childToResolve.values = response;
        return childToResolve;
      })
    );
  }

  resolveSingle<T>(serializedObj, childToResolve: OdooRelationship<T>): Observable<OdooRelationship<T>> {
    if (!childToResolve.id) {
      childToResolve.value = null;
      return of(childToResolve);
    }
    
    // const newInstanceObj = new childToResolve.typeOfObj();
    return this.search<T>(serializedObj, [['id', '=', childToResolve.id]]).pipe(
      catchError((e) => []),
      map(response => {
        childToResolve.value = response[0];
        return childToResolve;
      })
    );
  }


  
  /** USE WITH CAUTION. */
  resolveAll<T>(serializedOriginalObj: T): Observable<T> {
    const hasRelationShip = (variableToCheck: any): variableToCheck is OdooMultiRelationship<T> => {
      const ids = (variableToCheck as OdooMultiRelationship<T>).ids;
      return ids !== undefined && ids.length > 0;
    };
    const requests = [];
    Object.keys(serializedOriginalObj).forEach(key => {
      
      if (hasRelationShip(serializedOriginalObj[key])) {
        if (!serializedOriginalObj[key].ids.length) {
          serializedOriginalObj[key].values = []; // Avoid a call if no ids
          return of(serializedOriginalObj);
        }
        const newInstanceObj = new serializedOriginalObj[key].typeOfObj();
        requests.push(this.search<T>(newInstanceObj, [['id', 'in', serializedOriginalObj[key].ids]]).pipe(
          catchError(() => of([])),
          map(response => {
            // Map each item of the response
            serializedOriginalObj[key].values = response;
            return serializedOriginalObj;
          })
        ));
      }
      return null
    });

    if (requests.length > 0) {
      return forkJoin(requests).pipe(map(result => result[0])) as Observable<T>;
    } else {
      return of(serializedOriginalObj);
    }
  }


  resolveArrayOfSingle<T, U = T>(outputObj: OdooSerializableInterface<T>, serializedOriginalArrayObj: U[], key: string): Observable<U[]> {
    var idsTosend = [];
    serializedOriginalArrayObj.forEach(serializedOriginalObj => {
      idsTosend.push(serializedOriginalObj[key].id);
      if (!serializedOriginalObj[key].value) {
        serializedOriginalObj[key].value = [];
      }
    });
    idsTosend = idsTosend.filter(i => i)
    console.log("out" ,serializedOriginalArrayObj)
    // Avoid useless calls
    if (!idsTosend.length) {
      return of(serializedOriginalArrayObj);
    }
    var domain:any[] = [['id', 'in', idsTosend]]
    
    // BADFIX for products 
    if (outputObj.ODOO_MODEL == 'product.product')
      domain.push('|', ['active','=',true], ['active','=',false])

    return this.search<T>(outputObj, domain).pipe(
      catchError(() => of([])),
      map(response => {

        console.log("out response", response)
        // Map each item of the response to the corresponding object
        const responseMapTmpObj = {};
        response.forEach(singleObj => {
          responseMapTmpObj[singleObj.id] = singleObj;
        });

        serializedOriginalArrayObj.forEach(serializedOriginalObj => {

          console.log("filling ",serializedOriginalObj[key], responseMapTmpObj[serializedOriginalObj[key].id])
          serializedOriginalObj[key].value = responseMapTmpObj[serializedOriginalObj[key].id]
          console.log("....",serializedOriginalArrayObj, responseMapTmpObj)
          // serializedOriginalObj[key].value = responseMapTmpObj[id]
          // serializedOriginalObj[key].id.forEach(id => {
          //   serializedOriginalObj[key].values.push(responseMapTmpObj[id]);
          // });
        });
        return serializedOriginalArrayObj;
      })
    );
  }



  /** THIS IS HEAVY, USE WITH CAUTION. */
  resolveArray<T, U = T>(outputObj: OdooSerializableInterface<T>, serializedOriginalArrayObj: U[], key: string): Observable<U[]> {
    var idsTosend = [];
  
    serializedOriginalArrayObj.forEach(serializedOriginalObj => {
      idsTosend = idsTosend.concat(serializedOriginalObj[key].ids);
      if (!serializedOriginalObj[key].values) {
        serializedOriginalObj[key].values = [];
      }
    });

    console.log("outpre" ,idsTosend)

    // Avoid useless calls
    // if (!idsTosend.length) {
    //   return of(serializedOriginalArrayObj);
    // }

    console.log("out" , outputObj, idsTosend)


    return this.search<T>(outputObj, [['id', 'in', idsTosend]]).pipe(
      catchError(() => of([])),
      map(response => {

        console.log("out response", response)
        // Map each item of the response to the corresponding object
        const responseMapTmpObj = {};
        response.forEach(singleObj => {
          responseMapTmpObj[singleObj.id] = singleObj;
        });

        serializedOriginalArrayObj.forEach(serializedOriginalObj => {
          serializedOriginalObj[key].ids.forEach(id => {
            if (serializedOriginalObj[key].values.indexOf(responseMapTmpObj[id]) == -1)
              serializedOriginalObj[key].values.push(responseMapTmpObj[id]);
          });
        });

        console.log("out seri ",serializedOriginalArrayObj)
        return serializedOriginalArrayObj;
      })
    );
  }


  async onChange2<T>(serializedObj: OdooSerializableInterface<T>,id, fields) {
    return from(this.odoorpcService.onchange(serializedObj.ODOO_MODEL, id, fields))
  }

  inputValuesToQuerySearchOptions(
    model: string,
    domain: any[][],
    limit?: number,
    extra?: string,
    order?: string,
    fields?: string[],
  ): any {


    const optionObj = {
      table: model,
      criteria : domain,
      limit,
      extra,
      order : order,
      fields,
    };

    return optionObj;
  }

  inputValuesToOnChangeOptions(
    table: string,
    id: number,
    field: string,
    value: string | number
  ): OnChangeOptions {
    return {
      id: id.toString(),
      table,
      field,
      value
    };
  }

  inputValuesToQueryGetOptions(model: string, id: string, fields: any): QueryGetOptions {
    return {
      table: model,
      id,
      fields
    };
  }

  inputValuesToQueryPutOptions(model: string, id: number, jsonFields: object): QueryPutOptions {
    return {
      table: model,
      id: id.toString(),
      json_fields: jsonFields
    };
  }

  inputValuesToQueryPostOptions(model: string, jsonFields: object): QueryPostOptions {
    return {
      table: model,
      json_fields: jsonFields,
    };
  }


  // FIX TODO 
  async run<T>(action_id, active_id, active_model) {

    var params = {
      action_id: action_id,
      context: {
        active_ids: [active_id],
        active_id: active_id,
        active_model: active_model
      }
    };

    var r: any = await this.odoorpcService.sendRequest('/api/web/action/run', params)
  }



  call<T>(serializedObj: OdooSerializableInterface<T>, method: string, value?:any, context?:any): Observable<any> {

    return from(this.odoorpcService.call(
      method,
      serializedObj.ODOO_MODEL,
      value,
      null,
      context
      // params
    )).pipe(
      catchError(() => of(null)),
      map(response => {
        console.log("RESPPP", response)
        if (response && response.map) {
          var x = response.map(res => serializedObj.deserialize(res));
          return x
        } else {
          return response
        }
      })
    );
  }


  call4<T>(serializedObj: OdooSerializableInterface<T>, method: string, params: any, id?: number|null,value?:any): Observable<any> {

    return from(this.odoorpcService.call(
      method,
      serializedObj.ODOO_MODEL,
      value,
      id,
      params
    )).pipe(
      catchError(() => of(null)),
      map(res => {
        if (res && res.message) {
          return res;
        }
        return res
      })
    );
  }

  async call2(model, method, args, context?,id?) {

    var headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Coral-Communication-Mode': 'restful', // Needed to differenciate error handling odoo side
    });

    var url = '/api/web/dataset/call_kw/' + model + "/" + method;

    let params = {
      model: model,
      method: method,
      args: args,
      kwargs: {
        context: context
      },
    };

    let body = JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params,
    });


  return await firstValueFrom<any>(await this.httpClient.post(this.odoorpcService.odooServer + url, body, {headers: headers}))
}



}
