import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockMove } from './stock-move';


export class StockLocation extends OdooModel implements OdooSerializableInterface<SaleOrder> {
  public readonly ODOO_MODEL = 'stock.location';

  id: number;
  name: string;
  posx: number;
  posy: number;
  posz : number;

  constructor(id?: number, name?: string, posx?,posy?,posz?) {
    super(id);
    this.name = name
    // this.posx = posx
    // this.posy = posy
    // this.posz = posz
    // this.unit = unit;
    // this.packages = packages;
    // this.barcodes = barcodes;
    // this.move_lines =   new OdooMultiRelationship<StockMove>(StockMove);
  }

  create(): StockLocation {
    return new StockLocation();
  }
}
