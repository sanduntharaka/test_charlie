import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { SaleOrderLine } from './sale-order-line.model';
import { GenericOrder } from './generic-order';
import { OdooRelationship } from './odoo-relationship.model';
import { IConnectable, TrelloCardEntry2 } from './trello-card';
import { Lead } from './crm.lead.model';
import { CrmTag } from './crm.tag.model';
import { DriveFolder } from './drive.folder';
import { StockMove } from './stock-move';
import { StockPicking } from './stock-picking';
import { ProcurementGroup } from './procurement.group.model';
import { Contact } from './contact.model';

export class SaleOrder extends GenericOrder implements IConnectable<SaleOrder> {
  
  public readonly ODOO_MODEL = 'sale.order';
  public readonly ORDER_TYPE = SaleOrder;
  public readonly ORDER_TYPE_NAME = 'SaleOrder';
  public readonly ORDER_LINE_TYPE = SaleOrderLine;

  id: number;
  confirmation_date: string;
  create_ddt: boolean;
  // ddt_ids: OdooMultiRelationship<any>;
  incoterm: OdooRelationship;
  order_line: OdooMultiRelationship<SaleOrderLine>;
  parcels: number;
  payment_note: string;
  reference: string;
  signature: boolean;
  volume: number;
  weight: number;
  commitment_date: string = "";
  date_order : string = ""
  validity_date : string = ""
  note : string = ""
  picking_policy:string = ""
  pricelist_id : OdooRelationship = new OdooRelationship<any>()
  opportunity_id: OdooRelationship<Lead> = new OdooRelationship<Lead>()
  client_order_ref: string  = ""
  currency_id  : OdooRelationship = new OdooRelationship<any>()
  ga_amount_total_agreed: number = 0;
  ga_order: number = 0;
  ga_address: string = ""
  // order_group_id:OdooRelationship<SaleOrderGroup> = new OdooRelationship<SaleOrderGroup>()
  origin:string = ""
  tag_ids: OdooMultiRelationship<CrmTag> = new OdooMultiRelationship<CrmTag>(CrmTag)
  _pickings: StockPicking[];
  _moves: StockMove[];
  _sales: SaleOrder[];
  _open: boolean;
  ga_title:string = ""
  trello_ids: OdooMultiRelationship<TrelloCardEntry2> = new OdooMultiRelationship(TrelloCardEntry2);
  trello_card_ids: OdooMultiRelationship<TrelloCardEntry2> = new OdooMultiRelationship(TrelloCardEntry2);
  _procurementGroup: ProcurementGroup;
  _purchases: ProcurementGroup[];
  procurement_group_id: OdooRelationship<ProcurementGroup> = new OdooRelationship<ProcurementGroup>()
  partner_invoice_id:OdooRelationship<Contact> = new OdooRelationship<Contact>();
  drive_ids: OdooMultiRelationship<DriveFolder> = new OdooMultiRelationship(DriveFolder);
  drive_folder_ids: OdooMultiRelationship<DriveFolder> = new OdooMultiRelationship(DriveFolder);;
  purchase_order_count: number = 0;
  delivery_status:""|"pending"|"partial"|"full" = ""

  ODOO_FIELDS?: string[];
  _checked;
  
  constructor(id?: number) {
    super(id);
    this.incoterm = new OdooRelationship();
    this.order_line = new OdooMultiRelationship<SaleOrderLine>(SaleOrderLine);
    // this.ddt_ids = new OdooMultiRelationship(Placeholder);
  }
  


  create() {
    return new SaleOrder()
  }

}
