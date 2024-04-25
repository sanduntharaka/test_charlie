import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';

export class AccountIncoTerm extends OdooModel implements OdooSerializableInterface<AccountIncoTerm> {
  public readonly ODOO_MODEL = 'account.incoterms';

  create_date: string;
  active: boolean;
  write_uid: OdooRelationship;
  write_date: string;
  display_name: string;
  id: number;
  create_uid: OdooRelationship; // Avrà un tipo
  __last_update: string;
  code: string = "";
  name: string = "";


  constructor(id?: number) {
   super(id)
  }

  create(): AccountIncoTerm {
    return new AccountIncoTerm();
  }
}
