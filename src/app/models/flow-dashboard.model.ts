import { OdooSerializableInterface } from "../shared/interfaces/odoo-serializable-interface";
import { OdooModel } from "./odoo-model.model";

export interface ActionParam {
    id: number;
    key: string;
    value: string;
    action_id: number;
}

export interface Action {
    id: number;
    parsed: string;
    debug: string;
    action_type: string;
    busy: boolean;
    error: string;
    results: string;
    params: ActionParam[];
}


export class FlowDashboard extends OdooModel implements OdooSerializableInterface<FlowDashboard> {
    public readonly ODOO_MODEL = 'flow_dashboard';
    name : string  = ""
    date: number = 0
    actions : string = ""
    stylesCards : string  = ""
    
    // actions: Action[];
    create() {
        return new FlowDashboard()
    }
}

