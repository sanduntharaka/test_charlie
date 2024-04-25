import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { StockMoveLine } from './stock-move-line';
import { Product } from './product.model';
import { ProductTemplate } from './product.template.model';
import { StockPicking } from './stock-picking';
import { StockRule } from './stock-rule';
import { UomUom } from './uom-uom.model';
import { StockLocation } from './stock-location';
import { StockQuantPackage } from './stock-quant-package';


export class StockPackageLevel extends OdooModel implements OdooSerializableInterface<StockPackageLevel> {
  public readonly ODOO_MODEL = 'stock.package_level';

  // name:string = ""
  is_done:boolean = false
  location_dest_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  location_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  package_id:OdooRelationship<StockQuantPackage> = new OdooRelationship<StockQuantPackage>()

  constructor(id?: number,) {
    super(id);
    this.id = id;
  }

  create(): StockPackageLevel {
    return new StockPackageLevel();
  }
}
