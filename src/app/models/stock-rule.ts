import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockPicking } from './stock-picking';
import { StockPickingType } from './stock-picking-type.model';

export class StockRule extends OdooModel implements OdooSerializableInterface<StockRule> {
  public readonly ODOO_MODEL = 'stock.rule';

  name: string = "";

  picking_type_id: OdooMultiRelationship<StockPickingType> = new OdooMultiRelationship(StockPickingType)

  constructor(id?: number,) {
    super(id);
  }

  create(): StockRule {
    return new StockRule();
  }
}
