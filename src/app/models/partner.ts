

import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';

export class Partner extends OdooModel implements OdooSerializableInterface<Partner> {
    public readonly ODOO_MODEL = 'res.partner';
    name:string = ""
    street:string = ""
    city:string = ""

    create() {
        return new Partner()
    }

}



// stock.production.lot