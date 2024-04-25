import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';

export abstract class OdooModel {
  id: number;
  // user_id: OdooRelationship = new OdooRelationship();

  constructor(id?: number) {
    this.id = id;
  }

  // getUserShort = () => {
  //   var s = this.user_id.name.split(' ');
  //   return s.length > 1 ? s.map(x => x[0]).join('') : this.user_id[1];
  // };

  fields() {
    return Object.keys(this).filter(x=> !x.startsWith('ODOO') && !x.startsWith('ORDER') && !x.startsWith('_'))
  }

  serialize() {
    const copy = JSON.parse(JSON.stringify(this));
    Object.keys(copy).forEach(key => {

      console.log("xxfield ", key, copy)
      if (['ODOO_FIELDS', 'ODOO_MODEL', 'ORDER_TYPE'].indexOf(key) !== -1) {
        return;
      }
      if (Array.isArray(copy[key])) {
        copy[key] = copy[key][0];
      }
    });
    return JSON.stringify(copy);
  }


  serialize2() {
    const copy = JSON.parse(JSON.stringify(this));
    Object.keys(copy).forEach(key => {

      console.log("xxfield ", key, copy)
      if (['ODOO_FIELDS', 'ODOO_MODEL', 'ORDER_TYPE'].indexOf(key) !== -1) {
        return;
      }
      if (Array.isArray(copy[key])) {
        copy[key] = copy[key][0];
      }
    });
    return copy;
  }

  deserialize<T>(input: any): T {
    const model = this.create();
    Object.keys(input).forEach(inputKey => {

      if (!model[inputKey]) {
        model[inputKey] = input[inputKey];
        // if (model[inputKey] == false) 
        //   model[inputKey] = ""
        
        // console.log("model", inputKey, typeof(model[inputKey]), model[inputKey])
        return;
      }

      if (!model[inputKey].constructor) {
        return;
      }


      if (model[inputKey] instanceof OdooMultiRelationship) {
        model[inputKey].ids = input[inputKey];
        return;
      }

      if (model[inputKey] instanceof OdooRelationship) {
        model[inputKey] = OdooRelationship.deserialize(input[inputKey]);
        return;
      }
    });
    return model;
  }

  abstract create();
}
