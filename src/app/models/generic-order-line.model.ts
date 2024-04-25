import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { Contact } from './contact.model';
import { OdooRelationship } from './odoo-relationship.model';
import { Placeholder } from './placeholder.model';
import { Product } from './product.model';
import { SaleOrderLine } from './sale-order-line.model';
import { PurchaseOrderLine } from './purchase-order-line.model';
import { StockMove } from './stock-move';
import { ProductTemplate } from './product.template.model';
import { UomUom } from './uom-uom.model';

export abstract class GenericOrderLine extends OdooModel implements OdooSerializableInterface<GenericOrderLine> {
  ODOO_FIELDS: string[];
  ODOO_MODEL: string;

  // larghezza_uom: OdooRelationship;
  // lunghezza_uom: OdooRelationship;
  // price_subtotal: number = 0;
  product_uom: OdooRelationship<UomUom> = new OdooRelationship<UomUom>()
  write_uid: OdooRelationship;
  product_id: OdooRelationship<Product> = new OdooRelationship<Product>();
  // product_tmpl_id: OdooRelationship<ProductTemplate> = new OdooRelationship<ProductTemplate>();
  discount: number;
  // pezzi: number;
  // confezioni_qty_lorda: number;
  // lunghezza_editable: boolean;
  move_ids: OdooMultiRelationship<StockMove> = new OdooMultiRelationship(StockMove);
  id: number;
  // spessore_uom: OdooRelationship;
  default_code: string;
  // larghezza_editable: string;
  write_date: string;
  display_name: string;
  name: string;
  product_type: string = ""
  display_type : string = ""

  price_unit: number = 0;
  price_total: number = 0;
  product_uom_qty: number = 0; 

  // qty_invoiced: number;
  order_id: OdooRelationship = new OdooRelationship();
  // price_reduce: number;
  // lunghezza: number;
  // spessore: number;
  sequence: number = 0;
  // larghezza: number;
  // state: string;
  // barcode: string;
  // flag_pacco_only: boolean;
  // spessore_editable: boolean;
  // price_tax: number;
  // create_date: string;
  // currency_id: OdooRelationship;
  // qty_lorda: number;
  // create_uid: OdooRelationship;
  // product_code: string;
  // checked = false;


  constructor(id?: number, product_uom_qty?: number, larghezza_uom = new OdooRelationship(), lunghezza_uom = new OdooRelationship(), price_subtotal?: number, product_uom = new OdooRelationship(), write_uid = new OdooRelationship(), product_id = new OdooRelationship(), discount?: number, pezzi?: number, confezioni_qty_lorda?: number, lunghezza_editable?: boolean, move_ids = new OdooMultiRelationship<Placeholder>(new Placeholder()), spessore_uom = new OdooRelationship(), default_code?: string, larghezza_editable?: string, write_date?: string, product_packaging = new OdooRelationship(), display_name?: string, name?: string, qty_invoiced?: number, order_id = new OdooRelationship(), price_unit?: number, price_reduce?: number, lunghezza?: number, price_total?: number, spessore?: number, sequence?: number, larghezza?: number, state?: string, barcode?: string, flag_pacco_only?: boolean, spessore_editable?: boolean, price_tax?: number, create_date?: string, currency_id = new OdooRelationship(), qty_lorda?: number, create_uid = new OdooRelationship(), product_code?: string) {
    super(id);
    // this.product_uom_qty = product_uom_qty;
    // this.larghezza_uom = larghezza_uom;
    // this.lunghezza_uom = lunghezza_uom;
    // this.price_subtotal = price_subtotal;
    // this.product_uom = product_uom;
    // this.write_uid = write_uid;
    // this.product_id = product_id;
    // this.discount = discount;
    // this.pezzi = pezzi;
    // this.confezioni_qty_lorda = confezioni_qty_lorda;
    // this.lunghezza_editable = lunghezza_editable;
    // this.move_ids = new OdooMultiRelationship<StockMove>(StockMove);
    this.id = id;
    // this.spessore_uom = spessore_uom;
    // this.default_code = default_code;
    // this.larghezza_editable = larghezza_editable;
    // this.write_date = write_date;
    // this.product_packaging = product_packaging;
    // this.display_name = display_name;
    this.name = name;
    // this.qty_invoiced = qty_invoiced;
    // this.order_id = order_id;
    // this.price_unit = price_unit;
    // this.price_reduce = price_reduce;
    // this.lunghezza = lunghezza;
    // this.price_total = price_total;
    // this.spessore = spessore;
    // this.sequence = sequence;
    // this.larghezza = larghezza;
    // this.state = state;
    // this.barcode = barcode;
    // this.flag_pacco_only = flag_pacco_only;
    // this.spessore_editable = spessore_editable;
    // this.price_tax = price_tax;
    // this.create_date = create_date;
    // this.currency_id = currency_id;
    // this.qty_lorda = qty_lorda;
    // this.create_uid = create_uid;
    // this.product_code = product_code;
  }

  // getUOM() {
  //   if (this.larghezza &&
  //     this.lunghezza &&
  //     this.spessore
  //   ) return 'mq'
  //   else return 'pz'
  // }


  // getQtyLordaUOM() {
  //   if (this.product_uom.name == 'mq') {
  //     if (this.larghezza &&
  //         this.lunghezza &&
  //         this.spessore &&
  //         this.pezzi) {
  //           return (this.pezzi * ((this.larghezza / 1000)* (this.lunghezza / 1000) * (this.spessore /1000))   ) 
  //     } 
  //   }
  //   return 0
  // }

}

