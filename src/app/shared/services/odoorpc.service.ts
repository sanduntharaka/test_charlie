import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, firstValueFrom } from 'rxjs';
import { QueryDeleteOptions, QueryPostOptions, QueryPutOptions, QuerySearchOptions } from './odoo-entity-manager.service';

@Injectable({
  providedIn: 'root'
})
export class OdoorpcService {

  uniqIdCounter: number;
  // odooServer: string = "https://m-dev.galimberti.eu";
  odooServer: string = "";
  params: { db: string; login: string; password: string; };
  logged: boolean = false;
  sid: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }


  async login(params: { db: string; login: string; password: string; }) {


    console.log("RCP login")
    if (!params)
      return
    this.params = params


    this.logged = true
    // console.log(login, password, this.params)
    var params2 = {
      "access_token": params.password,
      "db": "galimberti2"
    }
    var x: any = await this.sendRequest('/api/web/session/authenticate', params)
    console.log("RCP ", x)
    if (!x.error) {
      this.logged = true
    } else {
      this.logged = false
    }
    return x
  }

  async logout() {
    this.httpClient.get(this.odooServer + '/api/web/session/logout').subscribe(result => {
      
    })

    this.router.navigate(['login'])

  }

  async getSessionInfo() {
    return await this.sendRequest('/api/web/session/get_session_info',{});
  }

  private buildRequest(params: any, id?) {
    this.uniqIdCounter += 1;

    return JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      id,
      params,
    });
  }


  async delete(opt: QueryDeleteOptions) {
    var kwargs = kwargs || {};
    kwargs.context = [];
    // Object.assign(kwargs.context, this.context);

    const params = {
      model: opt.table,
      method: "unlink",
      args: [opt.ids],
      kwargs: {},
    };

    var r: any = await this.sendRequest('/api/web/dataset/call_kw', params);
    console.log("LINK post", r)
    return r.result
  }


  async callWithApiKey(method, model, value, id, context: any, apiKey: string): Promise<any> {
    var kwargs = kwargs || {};
    kwargs.context = [];

    var params = {
      model: model,
      method: method,
      args: [value],
      kwargs: {
        context: context
      },
    };

    var r: any = await this.sendRequest('/api/web/dataset/call_kw/' + model + "/" + method, params, id, apiKey)

    return r.result ? r.result : []
  }


  async call(method, model, value, id?, context?: any): Promise<any> {
    var kwargs = kwargs || {};
    kwargs.context = [];

    var params = {
      model: model,
      method: method,
      args: [value],
      kwargs: {
        context: context
      },
    };

    var r: any = await this.sendRequest('/api/web/dataset/call_kw/' + model + "/" + method, params, id)

    return r.result ? r.result : []
  }

  async sendRequest(url: string, params: {}, id?, apikey?) {


    // var body = this.buildRequest(params,id);


    // var headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   // "Cookie":"session_id=" + this.sid,
    //   'Coral-Communication-Mode': 'restful', // Needed to differenciate error handling odoo side
    //   // 'X-Openerp-Session-Id': this.sid,
    //   // Authorization: 'Basic ' + btoa(this.httpAuth)
    // });
    // return await this.httpClient.post(this.odooServer + url, body, {headers: headers}).toPromise()


    const body = this.buildRequest(params, id);
    if (apikey) {
      var headers = new HttpHeaders({
        'Authorization': apikey,
        'Content-Type': 'application/json',
        // 'Coral-Communication-Mode': 'restful', // Needed to differenciate error handling odoo side
      });
    } else
      var headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Coral-Communication-Mode': 'restful', // Needed to differenciate error handling odoo side
      });

    let request = firstValueFrom<any>(await this.httpClient.post(this.odooServer + url, body, { headers: headers }))
    // TODO: refactor this
    let requestBody = await request
    if (requestBody.error && requestBody.error.code === 100 && !isDevMode())
      window.location.href = 'https://celebrated-blini-a8314c.netlify.app/login'
    return request
  }


  async searchRead(options: QuerySearchOptions): Promise<any[]> {

    var params = {
      context: { 'lang': "it_IT", tz: "Europe/Rome" },
      domain: options.criteria,
      fields: options.fields,
      limit: options.limit,
      model: options.table,
      offset: 0,
      sort: options.order,
      kwargs: { context: { 'lang': "it_IT", tz: "Europe/Rome" } }
    };

    var r: any = await this.sendRequest('/api/web/dataset/search_read', params)

    return r.result ? r.result.records : []
  }

  async groupByRead(options: QuerySearchOptions, field: string): Promise<any[]> {

    var params = {
      args: [
        options.criteria, // domain
        [],   // fields
        [field],         // groupby
      ],
      context: { 'lang': "it_IT", tz: "Europe/Rome" },
      method: "web_read_group",
      limit: options.limit,
      model: options.table,
      offset: 0,
      sort: options.order,
      kwargs: { context: { 'lang': "it_IT", tz: "Europe/Rome" } }
    };

    var r: any = await this.sendRequest('/api/web/dataset/call_kw/res.partner/web_read_group', params)

    r.result.groups.forEach((obj) => {
      for (let key in obj) {
        if (key.startsWith('__')) {
          delete obj[key];
        }
      }
    });
    return r.result ? r.result.groups : []
  }



  async post(queryPostOptions: QueryPostOptions): Promise<number[]> {
    console.log("xxcreate post",)
    var kwargs = kwargs || {};
    kwargs.context = [];
    // Object.assign(kwargs.context, this.context);
    let params = {
      model: queryPostOptions.table,
      method: "create",
      args: null,
      kwargs: { context: { lang: "it_IT" }, },
    };

    if (Array.isArray(queryPostOptions.json_fields)) {
      params.args = [queryPostOptions.json_fields]
    } else {
      params.args = [[queryPostOptions.json_fields]]
    }

    var r: any = await this.sendRequest('/api/web/dataset/call_kw/' + queryPostOptions.table + "/create", params);
    console.log(" post", r)
    return r.result
  }

  async onchange(model, id, jsonfields) {

    var kwargs = kwargs || {};
    kwargs.context = [];
    const params = {
      model: model,
      method: "onchange",
      args: [[id], jsonfields, "product_qty", { product_qty: "1" }],
      kwargs: kwargs,
    };

    return this.sendRequest('/api/web/dataset/call_kw', params);
  }


  async put<T>(queryPutOptions: QueryPutOptions): Promise<T[]> {

    var kwargs = kwargs || {};
    kwargs.context = [];
    if (queryPutOptions.ids)
      var ids = queryPutOptions.ids
    else
      ids = [Number(queryPutOptions.id)]

    const params = {
      model: queryPutOptions.table,
      method: "write",
      args: [ids, queryPutOptions.json_fields],
      kwargs: {},
    };

    var r: any = await this.sendRequest('/api/web/dataset/call_kw', params);
    return r
  }





}





