import { OdooModel } from './odoo-model.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { MrpProduction } from './mrp-production';


export  class MrpProductionBackorderLine extends OdooModel implements OdooSerializableInterface<MrpProductionBackorder> {
    
    public readonly ODOO_MODEL = 'mrp.production.backorder.line';
    mrp_production_ids:OdooMultiRelationship<MrpProduction> = new OdooMultiRelationship<MrpProduction>(MrpProduction)

    create() {
        return new MrpProductionBackorderLine();
    }
}



export  class MrpProductionBackorder extends OdooModel implements OdooSerializableInterface<MrpProductionBackorder> {
    
    public readonly ODOO_MODEL = 'mrp.production.backorder';
    mrp_production_ids:OdooMultiRelationship<MrpProduction> = new OdooMultiRelationship<MrpProduction>(MrpProduction)

    create() {
        return new MrpProductionBackorder();
    }
}
