import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';

export class ProductAttributeValue extends OdooModel implements OdooSerializableInterface<ProductAttributeValue> {
  public readonly ODOO_MODEL = 'product.attribute.value';

  name: string = "";
  // product_attribute_value_id: []
  attribute_id = new OdooRelationship()

  constructor(id?: number ) {
    super(id);
    
    
  }

  create(): ProductAttributeValue {
    return new ProductAttributeValue();
  }
}
