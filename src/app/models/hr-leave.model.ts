import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { HrEmployee } from './hr-employee.model';
import { OdooRelationship } from './odoo-relationship.model';

export class HrLeave extends OdooModel implements OdooSerializableInterface<HrLeave> {
  public readonly ODOO_MODEL = 'hr.leave';

  id: number = 0
  "employee_id": OdooRelationship<HrEmployee> = new OdooRelationship()

  create(): HrLeave {
    return new HrLeave();
  }

  
}
