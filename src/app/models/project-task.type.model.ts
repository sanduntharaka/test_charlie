import { OdooModel } from './odoo-model.model';
import { OdooRelationship } from './odoo-relationship.model';
import { ProjectProject } from './project-project.model';
import { Stage } from './stage.model';
import { User } from './user.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
// import { SaleOrder } from './sale-order.model';


export class ProjectTaskType extends OdooModel implements OdooSerializableInterface<ProjectTaskType> {
  public readonly ODOO_MODEL = 'project.task.type';

  id: number;
  name : string = ""
  user_id =""
  sequence: number = undefined

  // description : string = ""
  // partner_id: OdooRelationship<Partner> = new OdooRelationship<Partner>()
  // project_id :  OdooRelationship<ProjectProject> = new OdooRelationship<ProjectProject>()
  // date_deadline : string = ""

  // stage_id :  OdooRelationship<Stage> = new OdooRelationship<Stage>()
  // personal_stage_type_ids  = ""
  // personal_stage_type_id :  OdooRelationship<Stage> = new OdooRelationship<Stage>()
  // user_ids :OdooMultiRelationship<User> = new OdooMultiRelationship<User>(User)
  // timesheet_ids : OdooMultiRelationship<AccountAnalyticLine> = new OdooMultiRelationship<AccountAnalyticLine>(AccountAnalyticLine)

  constructor(id?: number, name?: string, sequence?:number) {
    super(id);
    this.name = name
  }

  create(): ProjectTaskType {
    return new ProjectTaskType();
  }
}
