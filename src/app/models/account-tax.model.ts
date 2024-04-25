import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';


export class AccountTax extends OdooModel implements OdooSerializableInterface<AccountTax> {
  public readonly ODOO_MODEL = 'account.tax';
  
  
  name : string = ""
  
  constructor(id?: number) {
    super(id);
  }

  create(): AccountTax {
    return new AccountTax();
  }
}


