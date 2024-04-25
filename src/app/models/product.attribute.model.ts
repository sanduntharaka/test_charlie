

import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { ProductTemplateAttributeLine } from './product.template.attribute.line';
import { ProductAttributeValue } from './product.attribute.value';

export class ProductAttribute extends OdooModel implements OdooSerializableInterface<ProductAttribute> {
  public readonly ODOO_MODEL = 'product.attribute';

  name: string = "";
  value_ids:OdooMultiRelationship<ProductAttributeValue> = new OdooMultiRelationship<ProductAttributeValue>(ProductAttributeValue)

  constructor(id?: number ) {
    super(id);
  }

  create(): ProductAttribute {
    return new ProductAttribute();
  }
}
