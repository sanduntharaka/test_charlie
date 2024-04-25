import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockMove } from './stock-move';
import { StockMoveLine } from './stock-move-line';


export class StockPickingType extends OdooModel implements OdooSerializableInterface<StockPickingType> {
  public readonly ODOO_MODEL = 'stock.picking.type';

  id: number;
  name:string = ""
  // // unit: number;
  // // packages: number;
  // // barcode: string;
  // move_lines:OdooMultiRelationship<StockMoveLine>;
  // move_line_ids_without_package:OdooMultiRelationship<StockMoveLine> = new OdooMultiRelationship<StockMoveLine>(StockMoveLine);
  // state: string = ""



  constructor(id?: number, unit?: number, packages?: number, barcode?: string, state?:string) {
    super(id);
    this.id = id;
  }

  create(): StockPickingType {
    return new StockPickingType();
  }
}
