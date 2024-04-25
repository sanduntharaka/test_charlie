import { Contact } from './contact.model';
import { CrmStage } from './crm.lead.stage.model';
import { DriveFolder } from './drive.folder';
import { OdooModel } from './odoo-model.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { SaleOrder } from './sale-order.model';
import { Stage } from './stage.model';
import { IConnectable, TrelloCardEntry2 } from './trello-card';
import { User } from './user.model';

/**
 * crm.lead
 */
// export class Lead extends OdooModel implements IConnectable<Lead> {
export class CrmLeadPart extends OdooModel {
   
    public readonly ODOO_MODEL = 'crm.lead.part';
    name:string = ""
    lead_id:OdooRelationship<CrmLeadPart> = new OdooRelationship<CrmLeadPart>()
    sale_order_ids:OdooMultiRelationship<SaleOrder> = new OdooMultiRelationship<SaleOrder>(SaleOrder)
    // title:string = ""
    // area: string = ""
    // partner_id:OdooRelationship<Contact> = new OdooRelationship<Contact>()
    // description:string = ""
    // stage_id:OdooRelationship<CrmStage> = new OdooRelationship<CrmStage>()
    // drive_link_docs:string 
    // drive_link_production:string 
    // drive_link_project:string 
    // drive_link_pos: any
    // tracking_code:string = ""
    
    // city:string = ""
    // street:string = ""
    // user_id :OdooRelationship<User> = new OdooRelationship<User>()
    // lng: any
    // lat: any
    
    // cordinates: string = "" // lat,lng

    // calendar_event_count: Number = 0
    // create_date: string = "";
    // create_uid: OdooRelationship = new OdooRelationship()

    
    // write_date:string = "" 

    // getTitle() {
    //     return this.partner_id.name  + " - " + this.city + " - " + this.name + " - " + this.id  
    // }

    create() {
        return new CrmLeadPart()
    }


   
}