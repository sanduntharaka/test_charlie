import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { Product } from './product.model';
import { ProductAttribute } from './product.attribute.model';

export class ProductTemplateAttributeValue extends OdooModel implements OdooSerializableInterface<ProductTemplateAttributeValue> {
  public readonly ODOO_MODEL = 'product.template.attribute.value';

  name: string = "";
  // product_attribute_value_id: []
  attribute_id:OdooRelationship<ProductAttribute> = new OdooRelationship<ProductAttribute>()
  product_tmpl_id:OdooRelationship = new OdooRelationship()
  product_attribute_value_id:OdooRelationship = new OdooRelationship();
  ptav_product_variant_ids:OdooMultiRelationship<Product> = new OdooMultiRelationship<Product>(new Product())
  
  constructor(id?: number ) {
    super(id);
  }

  create(): ProductTemplateAttributeValue {
    return new ProductTemplateAttributeValue();
  }
}


// : ProductTemplateAttributeValue
// ODOO_MODEL: "product.template.attribute.value"
// attribute_id: OdooRelationship {id: 9, name: 'length'}
// attribute_line_id: (2) [10, 'length']
// color: 6
// create_date: "2022-03-29 15:01:34"
// create_uid: (2) [2, 'Admin']
// currency_id: (2) [2, 'USD']
// display_name: "length: 12000"
// display_type: "radio"
// exclude_for: []
// html_color: false
// id: 32
// is_custom: false
// name: "12000"
// price_extra: 0
// product_attribute_value_id: (2) [13, 'length: 12000']
// product_tmpl_id: (2) [30, 'travetto 100x120 - GL24h - Abete - a vista']
// ptav_active: true
// ptav_product_variant_ids: OdooMultiRelationship {typeOfObj: Product, ids: Array(1), values: undefined}
// write_date: "2022-03-30 13:29:05"
// write_uid: (2) [2, 'Admin']
// __last_update: "2022-03-30 13:29:05"