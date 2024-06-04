import { OdooModel } from './odoo-model.model';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { HrEmployee } from './hr-employee.model';
import { ProjectProject } from './project-project.model';
import { User } from './user.model';
import { ProjectTask } from './project-task.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';

export class AccountAnalyticLine extends OdooModel implements OdooSerializableInterface<AccountAnalyticLine> {
  public readonly ODOO_MODEL = 'account.analytic.line';

  id: number;
  date : string = ""
  employee_id:OdooRelationship<HrEmployee> = new OdooRelationship<HrEmployee>()
  user_id:OdooRelationship<User> = new OdooRelationship<User>()

  name : string = ""
  unit_amount : string = ""
  project_id : OdooRelationship<ProjectProject> = new OdooRelationship<ProjectProject>()
  task_id : OdooRelationship<ProjectTask> = new OdooRelationship<ProjectTask>()

  constructor(id?: number, note?: string, active?: boolean, name?: string, write_date?: string, create_uid?: OdooRelationship,
              company_id?: OdooRelationship, _last_update?: string, write_uid?: OdooRelationship, line_ids?: OdooMultiRelationship<any>,
              display_name?: string, sequence?: number, create_date?: string) {
    super(id);
    this.id = id;
  }

  create(): AccountAnalyticLine {
    return new AccountAnalyticLine();
  }
}