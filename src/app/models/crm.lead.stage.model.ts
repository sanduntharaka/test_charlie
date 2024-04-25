import { Contact } from './contact.model';
import { OdooModel } from './odoo-model.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { SaleOrder } from './sale-order.model';
import { Stage } from './stage.model';
import { IConnectable, TrelloCardEntry2 } from './trello-card';

/**
 * crm.lead
 */
export class CrmStage extends OdooModel {
   
    public readonly ODOO_MODEL = 'crm.stage';
    name:string = ""
    sequence:number = null

    // area: string = ""
  totalRevenueValue: number;

    create() {
        return new CrmStage()
    }
}