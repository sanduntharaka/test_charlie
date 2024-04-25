import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { StockMoveRiga } from './stock-move-righe';
import { NaPacchiProduct } from './na-pacchi-product';
import { StockQuantPackage } from './stock-quant-package';
import { Product } from './product.model';
import { StockLocation } from './stock-location';
import { StockProductionLot } from './stock-production-lot.model';
import { StockMove } from './stock-move';
import { StockPickingType } from './stock-picking-type.model';
import { StockRule } from './stock-rule';
import { UomUom } from './uom-uom.model';
import { ProductPackaging } from './product.packaging.model';
import { StockPicking } from './stock-picking';
import { ProductTemplate } from './product.template.model';


export class StockMoveLine extends OdooModel implements OdooSerializableInterface<StockMoveLine> {
  public readonly ODOO_MODEL = 'stock.move.line';

  id: number;
  // unit: number;
  // packages: number;
  // barcodes: string[];
  // pacco_from: OdooRelationship = new OdooRelationship()
  // pacco_to: OdooRelationship = new OdooRelationship()
  // righe_from:OdooRelationship<NaPacchiProduct>
  // product_id:OdooRelationship = new OdooRelationship()
  // product_uom_qty
  // product_uom_qty_po
  // move_line_ids: OdooRelationship<StockMoveLine> = new OdooRelationship<StockMoveLine>()
  lot_id:OdooRelationship<StockProductionLot> = new OdooRelationship<StockProductionLot>()
  location_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  location_dest_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  product_id:OdooRelationship<Product> = new OdooRelationship<Product>()
  package_id:OdooRelationship<StockQuantPackage> = new OdooRelationship()
  result_package_id:OdooRelationship<StockQuantPackage> = new OdooRelationship()
  qty_done:number = 0;
  // product_uom_qty:number = 0
  lot_name:string =""
  origin:string = ""
  picking_id:OdooRelationship<StockPicking> = new OdooRelationship<StockPicking>()
  picking_type_id:OdooRelationship<StockPickingType> = new OdooRelationship<StockPickingType>()
  move_id:OdooRelationship<StockMove> = new OdooRelationship<StockMove>()
  product_uom_id:OdooRelationship<UomUom> = new OdooRelationship<UomUom>()
  _checked:boolean = false
  _justChanged:boolean = false
  reserved_uom_qty:number = 0
  // state = null
  // qty:number = 0
  // name:string = ""
  constructor(id?: number) {
    super(id);
    this.id = id;
    // this.name = name
    // this.product_uom_qty = product_uom_qty
    // this.product_uom_qty_po = product_uom_qty_po
    // this.righe_from = new OdooRelationship<NaPacchiProduct>()
    // this.unit = unit;
    // this.packages = packages;
    // this.barcodes = barcodes;
  }

  create(): StockMoveLine {
    return new StockMoveLine();
  }
}
