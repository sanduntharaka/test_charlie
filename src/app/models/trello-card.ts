import { OdooSerializableInterface } from "../shared/interfaces/odoo-serializable-interface"
import { BaseObj } from "./base"
import { DriveFolder } from "./drive.folder"
import { OdooModel } from "./odoo-model.model"
import { OdooMultiRelationship } from "./odoo-multi-relationship.model"

  export interface IConnectable<T>  {
    id: number
    trello_ids : OdooMultiRelationship<TrelloCardEntry2> 
    trello_card_ids: OdooMultiRelationship<TrelloCardEntry2> 
    
    drive_ids : OdooMultiRelationship<DriveFolder> 
    drive_folder_ids: OdooMultiRelationship<DriveFolder>
    name:string
    // drive_link_docs: string
    // drive_link_project: string
  }


  export class TrelloCardEntry2 extends OdooModel  implements OdooSerializableInterface<TrelloCardEntry2> {
    public readonly ODOO_MODEL = 'trello.card';

    name?:string = ""
    card_id:string= ""
    board_id:string= ""
    lead_id:[string,string]
    origin:string = ""

    create() {
      return new TrelloCardEntry2()
    }
  }

  





  // NO ODOO
  export class TrelloCard {
    id?: string
    name: string 
    desc: string
    pos: "top"
    due?: string
    idList: string
    idBoard: string
    customFieldItems: CustomField[] = []
    state_id?: []
    country_id?: []
    idCardSource // used by trello api to force copy when posting
    address?:string // For use with/by the Map Power-Up
    locationName?:string // For use with/by the Map Power-Up
    coordinates?:string // lat,lng For use with/by the Map Power-Up
  }

  export class TrelloAttachment {
    constructor(name,url) {
      this.name = name
      this.url = url
    }
    
    id?: string
    name: string
    url: string
  }

  export class CustomField {
    id:string
    idCustomField:string
    idModel:string
    value:string
    type:string
    
  }