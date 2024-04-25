import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { HrEmployee } from './hr-employee.model';
import { OdooRelationship } from './odoo-relationship.model';

export class HrLeaveType extends OdooModel implements OdooSerializableInterface<HrLeaveType> {
  public readonly ODOO_MODEL = 'hr.leave.type';

  id: number = 0
  name : string  = ""
  create(): HrLeaveType {
    return new HrLeaveType();
  }

}
