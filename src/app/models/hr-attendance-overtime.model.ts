import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { HrEmployee } from './hr-employee.model';
import { OdooRelationship } from './odoo-relationship.model';
import { HrAttendance } from './hr-attendance.model';

export class HrAttendanceOvertime extends OdooModel implements OdooSerializableInterface<HrAttendanceOvertime> {
  public readonly ODOO_MODEL = 'hr.attendance.overtime';
  "employee_id": OdooRelationship<HrEmployee> = new OdooRelationship()
  "date" : string = ""
  "duration" : number = 0 
  "duration_real" : number = 0 
  "adjustment" : string = ""

  constructor(id?: number) {
    super(id);
  }

  create(): HrAttendanceOvertime {
    return new HrAttendanceOvertime();
  }

  
}
