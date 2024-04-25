import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { StockMoveRiga } from './stock-move-righe';
import { NaPacchiProduct } from './na-pacchi-product';
import { Product } from './product.model';
import { StockQuantPackage } from './stock-quant-package';
import { StockLocation } from './stock-location';
import { UomUom } from './uom-uom.model';
import { StockProductionLot } from './stock-production-lot.model';


export class StockQuant extends OdooModel implements OdooSerializableInterface<StockQuant> {
  public readonly ODOO_MODEL = 'stock.quant';

  id: number;
  // unit: number;
  // packages: number;
  // barcodes: string[];
  // pacco_from: OdooRelationship = new OdooRelationship()
  // pacco_to: OdooRelationship = new OdooRelationship()
  // righe_from:OdooRelationship<NaPacchiProduct>
  product_id:OdooRelationship<Product> = new OdooRelationship<Product>()
  available_quantity:number = 0
  quantity:number = 0
  product_uom_id:OdooRelationship<UomUom> = new OdooRelationship<UomUom>()
  lot_id:OdooRelationship<StockProductionLot> = new OdooRelationship<StockProductionLot>()
  on_hand:boolean = false
  package_id:OdooRelationship<StockQuantPackage> = new OdooRelationship<StockQuantPackage>()
  location_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()

  inventory_quantity_set: boolean = false
  inventory_quantity:number = 0

  // product_uom_qty
  // product_uom_qty_po
  // move_line_ids: OdooRelationship<StockMoveLine> = new OdooRelationship<StockMoveLine>()
  // result_package_id:OdooRelationship<StockQuantPackage>
  // name:string =""


  create(): StockQuant {
    return new StockQuant();
  }
}
