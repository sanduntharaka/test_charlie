import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';

import { StockQuant } from './stock-quant';
import { StockLocation } from './stock-location';


export class StockQuantPackage extends OdooModel implements OdooSerializableInterface<StockQuantPackage> {
  public readonly ODOO_MODEL = 'stock.quant.package';

  id: number;
  quant_ids:OdooMultiRelationship<StockQuant> = new OdooMultiRelationship(StockQuant)
  location_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  name:string = ""

  create(): StockQuantPackage {
    return new StockQuantPackage();
  }
}
