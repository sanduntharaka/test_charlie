import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { SaleQuantityPickerResult } from './picking';


export class Stage extends OdooModel implements OdooSerializableInterface<SaleOrder> {
  public readonly ODOO_MODEL = 'crm.case.stage';

  id: number;
  name: string;
  sequence: number;

  constructor(id?: number, name?: string, sequence?:number) {
    super(id);
    this.name = name
    this.sequence = sequence
  }

  create(): Stage {
    return new Stage();
  }
}
