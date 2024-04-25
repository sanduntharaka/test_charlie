import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { Product } from './product.model';

export class ProductSupplierinfo extends OdooModel implements OdooSerializableInterface<ProductSupplierinfo> {
  public readonly ODOO_MODEL = 'product.supplierinfo';

  // name: string;
  display_name: string;

  sequence:number;

  product_id:OdooRelationship<Product> = new OdooRelationship<Product>(); 
  product_tmpl_id:OdooRelationship = new OdooRelationship(); 
  product_name:string;
  product_code:string =""
  currency_id:OdooRelationship = new OdooRelationship();
// date_start"
// 8: "date_end"
// 9: "company_id"
// 10: "min_qty"
  product_uom:number;
  price:number;
// 13: "delay"

  // default_code: number;
  // codice_fornitore: number;
  // description_sale: string;
  // description_purchase: string = "";
  // prezzo_impresa: string;
  // qty_available: number;
  // qty_on_sale: number;
  // list_price: number;
  // inventory_qty_needed: number;
  // fornitoreName: string = "";
  // fornitore:OdooRelationship = new OdooRelationship(); 
  // product_packaging:OdooRelationship = new OdooRelationship();
  // uom_po_id:OdooRelationship = new OdooRelationship(); 
  // uom_id:OdooRelationship = new OdooRelationship();
  // // categ_id:OdooRelationship = new OdooRelationship();
  // product_template_variant_value_ids= new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  // product_template_attribute_value_ids = new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  
  // packaging_ids:OdooMultiRelationship<ProductPackaging> = new OdooMultiRelationship<ProductPackaging>(ProductPackaging);

  // product_tmpl_id:OdooRelationship<ProductTemplate> = new OdooRelationship<ProductTemplate>()



  // variant_seller_id:[]
  
  constructor(id?: number, name?: string, default_code?: number, codice_fornitore?: number, description_sale?: string,
              prezzo_impresa?: string, qty_available?: number,inventory_qty_needed?:number, list_price?: number, uom_id = new OdooRelationship()) {
    super(id);
    // this.name = name;
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

  create(): ProductSupplierinfo {
    return new ProductSupplierinfo();
  }
}
