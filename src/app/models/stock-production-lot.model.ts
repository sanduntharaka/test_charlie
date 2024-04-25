import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { Product } from './product.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockQuant } from './stock-quant';


export class StockProductionLot extends OdooModel implements OdooSerializableInterface<StockProductionLot> {
  public readonly ODOO_MODEL = 'stock.lot';
  company_id:number = 0
  name:string = ""
  product_id:OdooRelationship<Product> = new OdooRelationship<Product>();
  quant_ids:OdooMultiRelationship<StockQuant> = new OdooMultiRelationship(StockQuant)
  
  create() {
    return new StockProductionLot();
  }
}
