import { OdooModel } from "./odoo-model.model"


export class DriveFolder extends OdooModel {
  public readonly ODOO_MODEL = 'drive.folder';

  name?:string = ""
  value:string= ""
  lead_id:[string,string]
  origin:string = ""

  
  create() {
    return new DriveFolder()
  }
}

  

