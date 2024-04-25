import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { SaleOrderLine } from './sale-order-line.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { GenericOrder } from './generic-order';
import { OdooRelationship } from './odoo-relationship.model';
import { Placeholder } from './placeholder.model';
import { IConnectable, TrelloCardEntry2 } from './trello-card';
import { Lead } from './crm.lead.model';
import { ProductPackaging } from './product.packaging.model';
import { User } from './user.model';
import { ProductSupplierinfo } from './product.supplierinfo';
import { AccountPaymentTerm } from './account-payment-term.model';
import { Contact } from './contact.model';
import { OdooModel } from './odoo-model.model';
import { SaleOrder } from './sale-order.model';

export class SaleOrderGroup   extends OdooModel implements OdooSerializableInterface<SaleOrderGroup> {
  public readonly ODOO_MODEL = 'sale.order.group';

  name:string = ""

  lead_id:OdooRelationship<Lead>  = new OdooRelationship<Lead>()
  sale_order_ids: OdooMultiRelationship<SaleOrder> = new OdooMultiRelationship<SaleOrder>(new SaleOrder)


  constructor(id?: number) {
    super(id);
  }

  create(): SaleOrderGroup {
    return new SaleOrderGroup();
  }
}




//  {
  
//   public readonly ODOO_MODEL = 'sale.order';
//   public readonly ORDER_TYPE = SaleOrder;
//   public readonly ORDER_TYPE_NAME = 'SaleOrder';
//   public readonly ORDER_LINE_TYPE = SaleOrderLine;

//   ga_title: string = ""
//   id: number;
//   confirmation_date: string;

// class SaleOrderGroup(models.Model):
//     _name = 'sale.order.group'
//     _description = 'Sale Order Group'

//     name = fields.Char(string='Name', required=True)
//     lead_id = fields.Many2one('crm.lead', string='Lead', required=True)
//     sale_order_ids = fields.One2many('sale.order', 'order_group_id', string='Sale Orders')
