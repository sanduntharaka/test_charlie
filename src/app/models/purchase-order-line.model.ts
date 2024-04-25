import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { GenericOrderLine } from './generic-order-line.model';
import { Placeholder } from './placeholder.model';
import { Product } from './product.model';
import { StockMove } from './stock-move';
import { UomUom } from './uom-uom.model';
import { ProductPackaging } from './product.packaging.model';
import { AccountTax } from './account-tax.model';

export class PurchaseOrderLine extends GenericOrderLine implements OdooSerializableInterface<PurchaseOrderLine> {

  public readonly ODOO_MODEL = 'purchase.order.line';

  qty_received: number = 0;
  date_planned: string = "";
  product_qty: number = 0;
  qty_invoiced : number = 0;
  product_packaging_qty: number = 0;
  price_unit : number = 0
  taxes_id : OdooMultiRelationship<AccountTax> = new OdooMultiRelationship<AccountTax>(AccountTax)
  move_ids:OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove)
  product_uom:OdooRelationship<UomUom> = new OdooRelationship<UomUom>()
  product_packaging_id : OdooRelationship<ProductPackaging> = new OdooRelationship<ProductPackaging>()

  constructor(id?: number, product_uom_qty?: number, larghezza_uom = new OdooRelationship(), lunghezza_uom = new OdooRelationship(), price_subtotal?: number, product_uom = new OdooRelationship(), write_uid = new OdooRelationship(), product_id = new OdooRelationship(), discount?: number, pezzi?: number, confezioni_qty_lorda?: number, lunghezza_editable?: boolean, move_ids = new OdooMultiRelationship<Placeholder>(new Placeholder()), spessore_uom = new OdooRelationship(), default_code?: string, larghezza_editable?: string, write_date?: string, product_packaging = new OdooRelationship(), display_name?: string, name?: string, qty_invoiced?: number, order_id = new OdooRelationship(), price_unit?: number, price_reduce?: number, lunghezza?: number, price_total?: number, spessore?: number, sequence?: number, larghezza?: number, state?: string, barcode?: string, flag_pacco_only?: boolean, spessore_editable?: boolean, price_tax?: number, create_date?: string, currency_id = new OdooRelationship(), qty_lorda?: number, create_uid = new OdooRelationship(), qty_received?: number, codice_fornitore?: string, date_planned?: string, product_qty?: number, sale_order_id = new OdooRelationship(), qty_received_po?: number, product_uom_po = new OdooRelationship(), partner_id = new OdooRelationship(), qty_lorda_po_pz?: number, qty_lorda_po?: number, date_order?: string, sale_line_id = new OdooRelationship(), product_qty_po?: number, confezioni_qty_lorda_received?: number) {
    super(id, product_uom_qty, larghezza_uom, lunghezza_uom, price_subtotal, product_uom, write_uid, product_id, discount, pezzi, confezioni_qty_lorda, lunghezza_editable, move_ids, spessore_uom, default_code, larghezza_editable, write_date, product_packaging, display_name, name, qty_invoiced, order_id, price_unit, price_reduce, lunghezza, price_total, spessore, sequence, larghezza, state, barcode, flag_pacco_only, spessore_editable, price_tax, create_date, currency_id, qty_lorda, create_uid);
    // this.qty_received = qty_received;
    // this.codice_fornitore = codice_fornitore;
    // this.date_planned = date_planned;
    // this.product_qty = product_qty;
    // this.sale_order_id = sale_order_id;
    // this.qty_received_po = qty_received_po;
    // this.product_uom_po = product_uom_po;
    // this.partner_id = partner_id;
    // this.qty_lorda_po_pz = qty_lorda_po_pz;
    // this.qty_lorda_po = qty_lorda_po;
    // this.date_order = date_order;
    // this.sale_line_id = sale_line_id;
    // this.product_qty_po = product_qty_po;
    // this.confezioni_qty_lorda_received = confezioni_qty_lorda_received;
  }

  static createFromProduct(orderId: number, product?: Product) {
    return {
      date_planned: new Date().toDateString(),
      product_uom_qty: 1,
      pezzi: 1,
      product_qty: 1,
      order_id: orderId,
      product_qty_po: 1,
      price_unit: null,
      product_uom: (product && product.uom_id) ? product.uom_id.id : null,
      product_id: product ? product.id : null,
      // default_code: product.default_code,
      // codice_fornitore: product.codice_fornitore,
      ODOO_MODEL: 'purchase.order.line'
    };
  }

  create(): PurchaseOrderLine {
    return new PurchaseOrderLine();
  }



}

