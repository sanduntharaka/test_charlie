import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';

export class HrEmployee extends OdooModel implements OdooSerializableInterface<HrEmployee> {
  public readonly ODOO_MODEL = 'hr.employee';

  id: number = 0
  barcode: string = ""
  name: string = ""
  attendance_state: string = ""
  hours_today : number = 0

  create(): HrEmployee {
    return new HrEmployee();
  }

  
}
