import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { HrEmployee } from './hr-employee.model';
import { OdooRelationship } from './odoo-relationship.model';

export class HrAttendance extends OdooModel implements OdooSerializableInterface<HrAttendance> {
  public readonly ODOO_MODEL = 'hr.attendance';
  
  "employee_id": OdooRelationship<HrEmployee> = new OdooRelationship()
  "check_in": string = ""
  "check_out": string = ""
  "worked_hours": string = ""

  constructor(id?: number) {
    super(id);
  }

  create(): HrAttendance {
    return new HrAttendance();
  }

  
}
