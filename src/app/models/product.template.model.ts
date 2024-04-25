import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { ProductTemplateAttributeValue } from './product.template.attribute.value.model';
import { ProductTemplateAttributeLine } from './product.template.attribute.line';
import { ProductAttributeValue } from './product.attribute.value';
import { ProductSupplierinfo } from './product.supplierinfo';
import { Product } from './product.model';
import { StockLocationRoute } from './stock-location-route.model';
import { ProductTag } from './product.tag.model';

export class ProductTemplate extends OdooModel implements OdooSerializableInterface<ProductTemplate> {
  public readonly ODOO_MODEL = 'product.template';

  name: string = "";
  display_name: string = "";
  sale_ok:boolean = true;
  product_tag_ids:OdooMultiRelationship<ProductTag> = new OdooMultiRelationship<ProductTag>(ProductTag)

  // default_code: number;
  // codice_fornitore: number;
  // description_sale: string;
  // description_purchase: string = "";
  // prezzo_impresa: string;
  // qty_available: number;
  
  // qty_on_sale: number;
  // list_price: number;
  // inventory_qty_needed: number;
  valid_product_template_attribute_line_ids:OdooMultiRelationship<ProductTemplateAttributeLine> = new OdooMultiRelationship<ProductTemplateAttributeLine>(ProductTemplateAttributeLine)
  route_from_categ_ids: OdooMultiRelationship<StockLocationRoute> = new OdooMultiRelationship<StockLocationRoute>(StockLocationRoute)

  // fornitoreName: string = "";
  // fornitore:OdooRelationship = new OdooRelationship(); 
  // product_packaging:OdooRelationship = new OdooRelationship(); 
  // uom_po_id:OdooRelationship = new OdooRelationship(); 
  // uom_id:OdooRelationship = new OdooRelationship();

  // product_code : string =""
  categ_id:OdooRelationship = new OdooRelationship();
  attribute_line_ids:OdooMultiRelationship<ProductTemplateAttributeLine> = new OdooMultiRelationship<ProductTemplateAttributeLine>(ProductTemplateAttributeLine)
  variant_seller_ids:OdooMultiRelationship<ProductSupplierinfo> = new OdooMultiRelationship<ProductSupplierinfo>(ProductSupplierinfo)
  product_variant_ids:OdooMultiRelationship<Product> = new OdooMultiRelationship<Product>(Product)

  constructor(id?: number, name?: string, default_code?: number, codice_fornitore?: number, description_sale?: string,
              prezzo_impresa?: string, qty_available?: number,inventory_qty_needed?:number, list_price?: number, uom_id = new OdooRelationship()) {
    super(id);
    this.name = name;
    // this.default_code = default_code;
    // this.codice_fornitore = codice_fornitore;
    // this.description_sale = description_sale;
    // this.prezzo_impresa = prezzo_impresa;
    // this.qty_available = qty_available;
    // this.list_price = list_price;
    // this.uom_id = uom_id;
    // this.qty_on_sale = 0;
    // this.inventory_qty_needed = inventory_qty_needed ;
  }

  create(): ProductTemplate {
    return new ProductTemplate();
  }
}
