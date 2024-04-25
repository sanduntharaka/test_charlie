import { OdooSerializableInterface } from "../shared/interfaces/odoo-serializable-interface";

export class OdooRelationship<T = void> {
    id: number;
    name: string;
    value:T 

    constructor(id?: number, name?: string, value?:T) {
        this.id = id;
        this.name = name;
        this.value = value
    }

    static deserialize(input: any) {
        try {
            return new OdooRelationship(
                input[0],
                input[1]
            );
        } catch (e) {
            return null;
        }
    }
}
