import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { ProductTemplateAttributeValue } from './product.template.attribute.value.model';
import { ProductTemplate } from './product.template.model';
import { ProductPackaging } from './product.packaging.model';
import { ProductSupplierinfo } from './product.supplierinfo';
import { Contact } from './contact.model';
import { MailMessage } from './mail.message';

export class MailNotification extends OdooModel implements OdooSerializableInterface<MailNotification> {
  public readonly ODOO_MODEL = 'mail.notification';
  // 'res_partner_id', '=', partner_id),
  // ('is_read', '=', False)
  res_partner_id:OdooRelationship<Contact> = new OdooRelationship<Contact>();
  is_read:boolean= false
  mail_message_id:OdooRelationship<MailMessage> = new OdooRelationship<MailMessage>()
  // active: boolean = false;
  // name: string;
  // display_name: string = ""
  // barcode:string = ""
  // default_code: number;
  // codice_fornitore: number;
  // description_sale: string;
  // description_purchase: string = "";
  // prezzo_impresa: string;
  // free_qty: number = 0;
  // virtual_available: number = 0;
  // qty_available: number = 0;
  // sale_ok:boolean = true;
  // lst_price:number = 0;
  // list_price: number;
  // inventory_qty_needed: number;
  // fornitoreName: string = "";
  // fornitore:OdooRelationship = new OdooRelationship(); 
  // product_packaging:OdooRelationship = new OdooRelationship();
  // attribute_line_ids: string =""
  // combination_indices:string = ""
  // description_purchase : string = ""
  // uom_po_id:OdooRelationship = new OdooRelationship(); 
  // uom_id:OdooRelationship = new OdooRelationship();
  // categ_id:OdooRelationship = new OdooRelationship();
  // product_template_variant_value_ids = new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  // product_template_attribute_value_ids = new OdooMultiRelationship<ProductTemplateAttributeValue>(ProductTemplateAttributeValue);
  // packaging_ids:OdooMultiRelationship<ProductPackaging> = new OdooMultiRelationship<ProductPackaging>(ProductPackaging);
  // product_tmpl_id:OdooRelationship<ProductTemplate> = new OdooRelationship<ProductTemplate>()
  // variant_seller_ids:OdooMultiRelationship<ProductSupplierinfo> = new OdooMultiRelationship<ProductSupplierinfo>(ProductSupplierinfo)
  // // forecast_availability: number = 0;
  // product_variant_count:number = 0;
  // is_product_variant:boolean = false;


  // title:string = ""
  // res_id:string = ""
  // body:string = ""
  // author_id:OdooRelationship<Contact> = new OdooRelationship<Contact>()
  // partner_ids:OdooMultiRelationship<Contact> = new OdooMultiRelationship<Contact>(Contact)
  // notified_partner_ids:OdooMultiRelationship<Contact> = new OdooMultiRelationship<Contact>(Contact)
  // list_price:number = null;
  // standard_price:number = 0;
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

  create(): MailNotification {
    return new MailNotification();
  }
}


