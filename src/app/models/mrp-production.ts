import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooModel } from './odoo-model.model';
import { StockMove } from './stock-move';
import { OdooRelationship } from './odoo-relationship.model';
import { Product } from './product.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { ProcurementGroup } from './procurement.group.model';
import { StockScrap } from './stock-scrap';

export class MrpProduction extends OdooModel implements OdooSerializableInterface<MrpProduction> {
  public readonly ODOO_MODEL = 'mrp.production';

  product_qty: number = 0;
  qty_producing: number = 0;
  product_id:OdooRelationship<Product> = new OdooRelationship<Product>();
  move_finished_ids:OdooMultiRelationship<StockMove>= new OdooMultiRelationship<StockMove>(StockMove);
  state:string = ""
  move_raw_ids: OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove);
  name: string = ""
  origin:string = ""
  components_availability_state:boolean = false;
  date_planned_start:string =""
  lot_producing_id:OdooRelationship<ProcurementGroup> = new OdooRelationship<ProcurementGroup>()
  procurement_group_id:OdooRelationship<ProcurementGroup> = new OdooRelationship<ProcurementGroup>()
  
  scrap_ids:OdooMultiRelationship<StockScrap> = new OdooMultiRelationship<StockScrap>(StockScrap)

  pg_qty_bands = 0
  pg_meta_qty_net_forecast = 0
  pg_qty_net_estimate = 0

  create() {
    return new MrpProduction()
  }


}
