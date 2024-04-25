import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';

export class ContactLink extends OdooModel implements OdooSerializableInterface<Contact> {

  public ODOO_MODEL = 'res.partner.link';

  type: string = ""
  note: string = ""
  partner_id:OdooRelationship = new OdooRelationship() 
  value: string = ""
  
  constructor(id?:number, type?:string, value?:string, note?:string) {
    super(id);
    this.type = type 
    this.value = value
    this.note = (note != 'false') ? note : ""
  }

  create() {
    return new ContactLink()
  }
}

export class Contact extends OdooModel implements OdooSerializableInterface<Contact> {
  public readonly ODOO_MODEL = 'res.partner';

  id: number;
  name: string = "";
  active:boolean = false;
  ga_arca:string = ""
  phone:string = ""
  mobile:string = ""
  email:string = ""
  parent_id: OdooRelationship<Contact> = new OdooRelationship<Contact>();
  ga_comment?: string = "";
  company_type: string;
  vat: string = "";
  // company_id:OdooRelationship<Contact> = new OdooRelationship<Contact>()
  // partner_id:OdooRelationship<Contact> = new OdooRelationship<Contact>()
  is_company:boolean = false;
  street: string = "";
  city: string = "";
  zip: string = "";
  child_ids: OdooMultiRelationship<Contact> = new OdooMultiRelationship<Contact>(Contact);
  ref: string = ""
  constructor(id?: number) {
    super(id);
  }

  create(): Contact {
    return new Contact();
  }

  deserialize<T>(input: any): T {
    return super.deserialize(input);
  }
}
