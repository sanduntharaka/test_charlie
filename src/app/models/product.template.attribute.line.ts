import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { ProductTemplateAttributeValue } from './product.template.attribute.value.model';
import { ProductTemplate } from './product.template.model';
import { ProductAttributeValue } from './product.attribute.value';
import { ProductAttribute } from './product.attribute.model';

export class ProductTemplateAttributeLine extends OdooModel implements OdooSerializableInterface<ProductTemplateAttributeLine> {
  public readonly ODOO_MODEL = 'product.template.attribute.line';

  // name: string = null;
  display_name:string=""
  // product_attribute_value_id: []
  product_tmpl_id:OdooRelationship<ProductTemplate> = new OdooRelationship<ProductTemplate>()
  attribute_id = new OdooRelationship<ProductAttribute>()
  value_ids:OdooMultiRelationship<ProductTemplateAttributeValue> =  new OdooMultiRelationship<ProductTemplateAttributeValue>(new ProductTemplateAttributeValue())
  constructor(id?: number ) {
    super(id);
  }

  create(): ProductTemplateAttributeLine {
    return new ProductTemplateAttributeLine();
  }
}
