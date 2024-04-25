import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { PurchaseOrderLine } from './purchase-order-line.model';
import { GenericOrder } from './generic-order';
import { Placeholder } from './placeholder.model';
import { Barcode } from './barcode';
import { IConnectable, TrelloCardEntry2 } from './trello-card';
import { DriveFolder } from './drive.folder';
import { OrderLine } from './order';
import { Partner } from './partner';
import { StockPickingType } from './stock-picking-type.model';
import { UomUom } from './uom-uom.model';
import { ProductPackaging } from './product.packaging.model';

export class PurchaseOrder extends GenericOrder {

  public readonly ODOO_MODEL = 'purchase.order';
  public readonly ORDER_TYPE = PurchaseOrder;
  public readonly ORDER_TYPE_NAME = 'PurchaseOrder';
  public readonly ORDER_LINE_TYPE = PurchaseOrderLine;
  id: number;

  order_line: OdooMultiRelationship<PurchaseOrderLine> = new OdooMultiRelationship(PurchaseOrderLine);
  // ancillary_purchase_order_ids: OdooMultiRelationship<PurchaseOrder>;
  // barcode_ids: OdooMultiRelationship<Barcode>;
  // comes_from_the_inventory: boolean;
  date_approve: string  = "";
  date_planned: string ="";
  // default_location_dest_id_usage: string;
  delivery_note: string;
  dest_address_id: OdooRelationship = new OdooRelationship<any>()
  
  // flag_supplier_product: boolean;
  group_id: OdooRelationship;
  is_shipped: boolean;
  notes: string = "";
  picking_count: number;
  partner_ref : string = ""
  picking_type_id:OdooRelationship<StockPickingType> = new OdooRelationship<StockPickingType>()
  product_id: OdooRelationship;

  incoterm_id  : OdooRelationship = new OdooRelationship<any>()
  currency_id  : OdooRelationship = new OdooRelationship<any>()
  // currency_id:OdooRelationship<ResCurren> = new OdooRelationship<ProductTemplate>()

  origin: string = "";
  
  // sale_order_lines: OdooMultiRelationship<any>;
  // vettore_id: OdooRelationship;

  // trello_ids: OdooMultiRelationship<TrelloCardEntry2> = new OdooMultiRelationship(TrelloCardEntry2)
  // drive_link_docs: string = ""
  // drive_link_project: string = ""


  constructor(id?: number, name?: string, date_planned?: string, create_date?) {
    super(id, name);
    this.id = id;
    // this.order_line = new OdooMultiRelationship<PurchaseOrderLine>(PurchaseOrderLine);
    // this.ancillary_purchase_order_ids = new OdooMultiRelationship<PurchaseOrder>(PurchaseOrder);
    // this.barcode_ids = new OdooMultiRelationship(Barcode);
    // this.dest_address_id = new OdooRelationship();
    // this.group_id = new OdooRelationship();
    // this.incoterm_id = new OdooRelationship();
    // this.picking_type_id = new OdooRelationship();
    this.product_id = new OdooRelationship();
    // this.sale_order_lines = new OdooMultiRelationship(Placeholder);
    // this.vettore_id = new OdooRelationship();
    this.date_planned = date_planned;
    
  }
  drive_ids: OdooMultiRelationship<DriveFolder>;
 


  create(): PurchaseOrder {
    return new PurchaseOrder();
  }

  
}

