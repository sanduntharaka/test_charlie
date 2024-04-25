import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';

export class AccountPaymentTerm extends OdooModel implements OdooSerializableInterface<AccountPaymentTerm> {
  public readonly ODOO_MODEL = 'account.payment.term';

  id: number;
  note: string;
  active: boolean;
  name: string;
  write_date: string;
  create_uid: OdooRelationship;
  company_id: OdooRelationship;
  __last_update: string;
  write_uid: OdooRelationship;
  line_ids: OdooMultiRelationship<any>; // Andrebbe inserito il tipo specifico corrispondente
  display_name: string;
  sequence: number;
  create_date: string;


  constructor(id?: number, note?: string, active?: boolean, name?: string, write_date?: string, create_uid?: OdooRelationship,
              company_id?: OdooRelationship, _last_update?: string, write_uid?: OdooRelationship, line_ids?: OdooMultiRelationship<any>,
              display_name?: string, sequence?: number, create_date?: string) {
    super(id);
    this.id = id;
    this.note = note;
    this.active = active;
    this.name = name;
    this.write_date = write_date;
    this.create_uid = create_uid;
    this.company_id = company_id;
    this.__last_update = _last_update;
    this.write_uid = write_uid;
    this.line_ids = line_ids;
    this.display_name = display_name;
    this.sequence = sequence;
    this.create_date = create_date;
  }

  create(): AccountPaymentTerm {
    return new AccountPaymentTerm();
  }
}
