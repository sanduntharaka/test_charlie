import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';


export class Barcode extends OdooModel implements OdooSerializableInterface<SaleOrder> {
  public readonly ODOO_MODEL = 'barcode.purchase';
  
  
  barcode:string;
  purchase_id

  constructor(id?: number, barcode?, qty?) {
    super(id);
    this.barcode = barcode
  }

  create(): Barcode {
    return new Barcode();
  }
}


