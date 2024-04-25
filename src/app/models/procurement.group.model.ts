import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockMove } from './stock-move';
import { StockMoveLine } from './stock-move-line';
import { OdooRelationship } from './odoo-relationship.model';
import { StockPickingType } from './stock-picking-type.model';
import { PurchaseOrder } from './order';


export class ProcurementGroup extends OdooModel implements OdooSerializableInterface<SaleOrder> {
  public readonly ODOO_MODEL = 'procurement.group';

  name:string = ""
  sale_id:OdooRelationship<SaleOrder> = new OdooRelationship<SaleOrder>()
  // purchase_id:OdooRelationship<PurchaseOrder> = new OdooRelationship<PurchaseOrder>()
  stock_move_ids:OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove)
//   purchase_id:OdooRelationship<PurchaseOrder> = new OdooRelationship<PurchaseOrder>()
//   id: number;
//   name:string = ""
//   move_ids_without_package:OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove);
//   move_lines:OdooMultiRelationship<StockMoveLine>;
//   move_line_ids_without_package:OdooMultiRelationship<StockMoveLine> = new OdooMultiRelationship<StockMoveLine>(StockMoveLine);
//   state: string = ""
//   group_id:OdooMultiRelationship<
//   picking_type_id:OdooRelationship<StockPickingType> = new OdooRelationship<StockPickingType>()
//   origin:string = ""
  
//   constructor(id?: number) {
//     super(id);
//     this.id = id;
//   }

  create(): ProcurementGroup {
    return new ProcurementGroup();
  }
}
