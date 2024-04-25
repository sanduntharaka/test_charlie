import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockMove } from './stock-move';
import { StockMoveLine } from './stock-move-line';
import { OdooRelationship } from './odoo-relationship.model';
import { StockPickingType } from './stock-picking-type.model';
import { ProcurementGroup } from './procurement.group.model';
import { Partner } from './partner';
import { StockLocation } from './stock-location';
import { StockPackageLevel } from './stock-package-level';
import { DeliveryCarrier } from './delivery-carrier.model';
import { PurchaseOrder } from './order';


export class StockPicking extends OdooModel implements OdooSerializableInterface<StockPicking> {
  public readonly ODOO_MODEL = 'stock.picking';

  id: number;
  name:string = ""

  move_ids_without_package:OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove);
  move_lines:OdooMultiRelationship<StockMoveLine>;
  move_line_ids_without_package:OdooMultiRelationship<StockMoveLine> = new OdooMultiRelationship<StockMoveLine>(StockMoveLine);
  move_ids:OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove);
  purchase_id:OdooRelationship<PurchaseOrder> = new OdooRelationship<PurchaseOrder>()
  sale_id:OdooRelationship<PurchaseOrder> = new OdooRelationship<PurchaseOrder>()
  state: string = ""
  group_id:OdooRelationship<ProcurementGroup> = new OdooRelationship<ProcurementGroup>()
  picking_type_id:OdooRelationship<StockPickingType> = new OdooRelationship<StockPickingType>()
  origin:string = ""
  partner_id:OdooRelationship<Partner> = new OdooRelationship<Partner>()
  scheduled_date:string="";
  // date_planned:string ="";
  date_deadline: string="";
  date_done : string = "";
  

  carrier_id:OdooRelationship<DeliveryCarrier> = new OdooRelationship<DeliveryCarrier>()

  location_id: OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  location_dest_id: OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  package_level_ids: OdooMultiRelationship<StockPackageLevel> = new OdooMultiRelationship<StockPackageLevel>(StockPackageLevel)
  constructor(id?: number) {
    super(id);
    this.id = id;
  }

  create(): StockPicking {
    return new StockPicking();
  }
}
