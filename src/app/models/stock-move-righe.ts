import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';


export class StockMoveRiga extends OdooModel implements OdooSerializableInterface<StockMoveRiga> {
  public readonly ODOO_MODEL = 'na.pacchi.product';

  id: number;
  // unit: number;
  // packages: number;
  // barcodes: string[];
  // qty
  // pacco_from:  OdooRelationship = new OdooRelationship()
  // pacco_to:  OdooRelationship = new OdooRelationship()
  // righe_from:OdooMultiRelationship<StockMove>;
  // product_id:OdooRelationship = new OdooRelationship()
  // product_uom_qty
  // product_uom_qty_po
  // state = null
  qty:number 

  
  // name:string = ""
  constructor(id?: number, name?,product_uom_qty?,product_uom_qty_po?) {
    super(id);
    this.id = id;
    // this.name = name
    // this.product_uom_qty = product_uom_qty
    // this.product_uom_qty_po = product_uom_qty_po
    // this.unit = unit;
    // this.packages = packages;
    // this.barcodes = barcodes;
  }

  create(): StockMoveRiga {
    return new StockMoveRiga();
  }
}
