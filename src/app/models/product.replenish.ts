import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { ProductTemplateAttributeValue } from './product.template.attribute.value.model';
import { ProductTemplate } from './product.template.model';
import { ProductPackaging } from './product.packaging.model';
import { ProductSupplierinfo } from './product.supplierinfo';
import { ProductTag } from './product.tag.model';
import { Product } from './product.model';
import { UomUom } from './uom-uom.model';

export class ProductReplenish extends OdooModel implements OdooSerializableInterface<ProductReplenish> {
  public readonly ODOO_MODEL = 'product.replenish';

  name: string = "";
  date_planned: string = ""
  product_id:OdooRelationship<Product> = new OdooRelationship<Product>()
  product_uom_id:OdooRelationship<UomUom> = new OdooRelationship<UomUom>()
  quantity: number = 0;

  constructor(id?: number, name?: string) {
    super(id);
    this.name = name;
  }

  create(): ProductReplenish {
    return new ProductReplenish();
  }
}


// company_id
// : 
// 1
// date_planned
// : 
// "2024-01-16 14:35:40"
// product_has_variants
// : 
// true
// product_id
// : 
// 45271
// product_tmpl_id
// : 
// 45355
// product_uom_id
// : 
// 9
// quantity
// : 
// 11
// route_ids
// : 
// [[6, false, []]]