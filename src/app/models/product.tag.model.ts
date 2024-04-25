import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';

export class ProductTag extends OdooModel implements OdooSerializableInterface<ProductTag> {
  public readonly ODOO_MODEL = 'product.tag';

  name:string = ""

  constructor(id?: number) {
    super(id);
  }

  create(): ProductTag {
    return new ProductTag();
  }
}
