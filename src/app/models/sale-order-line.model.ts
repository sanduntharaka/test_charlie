import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { GenericOrderLine } from './generic-order-line.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { Product } from './product.model';
import { StockLocationRoute } from './stock-location-route.model';
import { StockMove } from './stock-move';
import { ProductPackaging } from './product.packaging.model';
import { AccountTax } from './account-tax.model';
import { PurchaseOrderLine } from './purchase-order-line.model';

export class SaleOrderLine extends GenericOrderLine implements OdooSerializableInterface<SaleOrderLine> {

  route_id:OdooRelationship<StockLocationRoute> = new OdooRelationship<StockLocationRoute>()
  
  move_ids:OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove)

  public ODOO_MODEL = 'sale.order.line';
  virtual_available_at_date:number = 0;
  forecast_expected_date:string = "";
  is_mto:boolean = false;
  scheduled_date:string="";
  qty_available_today:number = 0;
  free_qty_today:number = 0;
  price_subtotal: number = 0;
  price_unit:number = 0;
  product_packaging_id : OdooRelationship<ProductPackaging> = new OdooRelationship<ProductPackaging>()
  tax_id : OdooMultiRelationship<AccountTax> = new OdooMultiRelationship<AccountTax>(AccountTax)
  product_packaging_qty: number = 0;
  qty_delivered:number = 0;
  qty_to_deliver:number = 0;
  _checked:boolean;
  _dragtarget:boolean;
  discount:number = 0;
  margin:number// = 0;
  margin_percent:number //= 0;
  display_type:string = ""; // line_section"
  purchase_line_ids:OdooMultiRelationship<PurchaseOrderLine> = new OdooMultiRelationship<PurchaseOrderLine>(PurchaseOrderLine);

  static createFromProduct(orderId: number, product?: Product) {
    return {
      order_id: orderId,
      product_id: product ? product.id : null,
      date_planned: new Date().toDateString(),
      product_uom_qty: 0,
      pezzi: 1,
      price_unit: null,
      product_qty: 0,
      product_qty_po: 0,
      product_uom: (product && product.uom_id) ? product.uom_id.id : null,
      ODOO_MODEL: 'sale.order.line'
    }
  }

  create(): SaleOrderLine {
    return new SaleOrderLine();
  }
}


