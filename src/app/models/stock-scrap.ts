import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { MrpProduction } from './mrp-production';
import { OdooRelationship } from './odoo-relationship.model';
import { ProductTemplate } from './product.template.model';
import { Product } from './product.model';
import { StockLocation } from './stock-location';

export class StockScrap extends OdooModel implements OdooSerializableInterface<StockScrap> {
  public readonly ODOO_MODEL = 'stock.scrap';

  name: string = "";

  // picking_type_id: OdooMultiRelationship<StockPickingType> = new OdooMultiRelationship(StockPickingType)

  constructor(id?: number,) {
    super(id);
  }

  production_id: OdooRelationship<MrpProduction> = new OdooRelationship()
  product_id: OdooRelationship<Product> = new OdooRelationship()
  scrap_qty: number = 0
  scrap_location_id:OdooRelationship<StockLocation> =  new OdooRelationship()

  create(): StockScrap {
    return new StockScrap();
  }
}
