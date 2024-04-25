import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockRule } from './stock-rule';


export class StockLocationRoute extends OdooModel implements OdooSerializableInterface<SaleOrder> {
  public readonly ODOO_MODEL = 'stock.route';

  id: number;
  name: string = "";
  sale_selectable:boolean = false

  rule_ids:OdooMultiRelationship<StockRule> = new OdooMultiRelationship(new StockRule());

  create(): StockLocationRoute {
    return new StockLocationRoute();
  }
}
