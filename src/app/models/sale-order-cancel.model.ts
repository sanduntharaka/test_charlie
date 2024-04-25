import { OdooModel } from './odoo-model.model';
import { OdooRelationship } from './odoo-relationship.model';
import { SaleOrder } from './sale-order.model';

export class SaleOrderCancel extends OdooModel  {
  
  public readonly ODOO_MODEL = 'sale.order.cancel';
  // display_delivery_alert
  // display_invoice_alert
  // display_purchase_orders_alert
  order_id:OdooRelationship<SaleOrder> = new OdooRelationship()
  recipient_ids: []
  // render_model
  // subject
  // template_id


  constructor(id?: number) {
    super(id);
  }

  create() {
    return new SaleOrderCancel()
  }

}

