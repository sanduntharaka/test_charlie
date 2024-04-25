import { OdooSerializableInterface } from "../shared/interfaces/odoo-serializable-interface";
import { OdooModel } from "./odoo-model.model";

export class UomUom extends OdooModel implements OdooSerializableInterface<UomUom> {
    public readonly ODOO_MODEL = 'uom.uom';
    name:string = ""

    create() {
        return new UomUom()
    }

}