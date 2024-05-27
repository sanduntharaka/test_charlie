import { OdooModel } from './odoo-model.model';
import { OdooRelationship } from './odoo-relationship.model';
import {OdooMultiRelationship} from "./odoo-multi-relationship.model";
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { Partner } from './partner';
import { Tag } from './tags.model';
// import { SaleOrder } from './sale-order.model';


export class ProjectProject extends OdooModel implements OdooSerializableInterface<ProjectProject> {
  public readonly ODOO_MODEL = 'project.project';

  id: number;
  name: string = ""
  partner_id: OdooRelationship<Partner> = new OdooRelationship<Partner>()
  tag_ids:OdooMultiRelationship<Tag> = new OdooMultiRelationship<Tag>(Tag)

  constructor(id?: number, name?: string, sequence?:number) {
    super(id);
    this.name = name
  }

  create(): ProjectProject {
    return new ProjectProject();
  }
}
