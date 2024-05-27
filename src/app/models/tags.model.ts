import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooModel } from './odoo-model.model';
// import { SaleOrder } from './sale-order.model';


export class Tag extends OdooModel implements OdooSerializableInterface<Tag> {
  public readonly ODOO_MODEL = 'crm.tag';

  name: string = ""
  color: string = ""

  create(): Tag {
    return new Tag();
  }
}
