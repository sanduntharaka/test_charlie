import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { ProductTemplateAttributeValue } from './product.template.attribute.value.model';
import { ProductTemplate } from './product.template.model';
import { ProductPackaging } from './product.packaging.model';
import { ProductSupplierinfo } from './product.supplierinfo';
import { ProductTag } from './product.tag.model';
import { StockLocationRoute } from './stock-location-route.model';

export class Product extends OdooModel implements OdooSerializableInterface<Product> {
  public readonly ODOO_MODEL = 'product.product';

  active: boolean = false;
  name: string;
  display_name: string = ""
  barcode:string = ""
  // default_code: number;
  // codice_fornitore: number;
  // description_sale: string;
  // description_purchase: string = "";
  // prezzo_impresa: string;
  route_from_categ_ids: OdooMultiRelationship<StockLocationRoute> = new OdooMultiRelationship<StockLocationRoute>(StockLocationRoute)
  outgoing_qty: number = 0;
  product_tag_ids: OdooMultiRelationship<ProductTag> = new OdooMultiRelationship(ProductTag)
  free_qty: number = 0;
  virtual_available: number = 0;
  qty_available: number = 0;
  sale_ok:boolean = true;
  lst_price:number = 0;
  // list_price: number;
  // inventory_qty_needed: number;
  // fornitoreName: string = "";
  // fornitore:OdooRelationship = new OdooRelationship(); 
  // product_packaging:OdooRelationship = new OdooRelationship();
  attribute_line_ids: string =""
  combination_indices:string = ""
  description_purchase : string = ""
  uom_po_id:OdooRelationship = new OdooRelationship(); 
  uom_id:OdooRelationship = new OdooRelationship();
  categ_id:OdooRelationship = new OdooRelationship();
  product_template_variant_value_ids = new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  product_template_attribute_value_ids = new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  packaging_ids:OdooMultiRelationship<ProductPackaging> = new OdooMultiRelationship<ProductPackaging>(ProductPackaging);
  product_tmpl_id:OdooRelationship<ProductTemplate> = new OdooRelationship<ProductTemplate>()
  variant_seller_ids:OdooMultiRelationship<ProductSupplierinfo> = new OdooMultiRelationship<ProductSupplierinfo>(ProductSupplierinfo)
  // forecast_availability: number = 0;
  product_variant_count:number = 0;
  is_product_variant:boolean = false;
  

  list_price:number = null;
  standard_price:number = 0;
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

  create(): Product {
    return new Product();
  }
}



export class ProductWithOnlyVariants extends OdooModel implements OdooSerializableInterface<Product> {
  public readonly ODOO_MODEL = 'product.product';

  // default_code: number;
  // codice_fornitore: number;
  // description_sale: string;
  // description_purchase: string = "";
  // prezzo_impresa: string;
  // list_price: number;
  // inventory_qty_needed: number;
  // fornitoreName: string = "";
  // fornitore:OdooRelationship = new OdooRelationship(); 
  // product_packaging:OdooRelationship = new OdooRelationship();
  qty_available: number = 0;
  outgoing_qty: number = 0;
  display_name: string = ""
  virtual_available: number = 0;
  product_template_variant_value_ids = new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  product_template_attribute_value_ids = new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  product_tmpl_id:OdooRelationship<ProductTemplate> = new OdooRelationship<ProductTemplate>()
  // forecast_availability: number = 0;
  packaging_ids:OdooMultiRelationship<ProductPackaging> = new OdooMultiRelationship<ProductPackaging>(ProductPackaging);
  standard_price:number = 0;
  lst_price:number = 0;
  uom_id:OdooRelationship = new OdooRelationship();
  _lst_price: number;

  constructor(id?) {
    super(id);
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

  create(): ProductWithOnlyVariants {
    return new ProductWithOnlyVariants();
  }
}
