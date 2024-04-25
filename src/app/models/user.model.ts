import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooModel } from './odoo-model.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';

export class User extends OdooModel implements OdooSerializableInterface<User> {
  public readonly ODOO_MODEL = 'res.users';

  name: string;


  constructor(id?: number, name?: string) {
    super(id);
    this.name = name;
  }

  create(): User {
    return new User();
  }
}
