import { OdooModel } from './odoo-model.model';
import { OdooRelationship } from './odoo-relationship.model';
import { Stage } from './stage.model';
import { User } from './user.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { SaleOrderLine } from './sale-order-line.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { Partner } from './partner';
import { ProjectProject } from './project-project.model';
import { ProjectTaskType } from './project-task.type.model';
// import { SaleOrder } from './sale-order.model';


export class ProjectTask extends OdooModel implements OdooSerializableInterface<ProjectTask> {
  public readonly ODOO_MODEL = 'project.task';

  id: number;
  name: string = ""
  description : string = ""

  sequence: number = 0

  is_blocked: boolean = false
  partner_id: OdooRelationship<Partner> = new OdooRelationship<Partner>()
  parent_id: OdooRelationship<ProjectTask> = new OdooRelationship<ProjectTask>()
  project_id :  OdooRelationship<ProjectProject> = new OdooRelationship<ProjectProject>()
  date_deadline : string | boolean = ""
  date_last_stage_update : string =""

  stage_id :  OdooRelationship<ProjectTaskType> = new OdooRelationship<ProjectTaskType>()
  user_ids :OdooMultiRelationship<User> = new OdooMultiRelationship<User>(User)
  task_properties:any = null
  _stage: any

  constructor(id?: number, name?: string, sequence?:number) {
    super(id);
    this.name = name
  }

  create(): ProjectTask {
    return new ProjectTask();
  }
}
