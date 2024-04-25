import { OdooModel } from './odoo-model.model';


export class CrmTag extends OdooModel {
   
    public readonly ODOO_MODEL = 'crm.tag';
    name:string = ""

    create() {
        return new CrmTag()
    }


   
}