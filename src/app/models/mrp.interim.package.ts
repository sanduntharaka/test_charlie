import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { HrEmployee } from './hr-employee.model';
import { OdooRelationship } from './odoo-relationship.model';
import { MrpProduction } from './mrp-production';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';

export class MrpInterimPackage extends OdooModel implements OdooSerializableInterface<MrpInterimPackage> {
  public readonly ODOO_MODEL = 'mrp.interim.package';

  id: number = 0
  // move_dest_ids:OdooMultiRelationship<StockMove>  = new OdooMultiRelationship<StockMove>(StockMove)
  production_order_ids: OdooMultiRelationship<MrpProduction> = new OdooMultiRelationship<MrpProduction>(MrpProduction)
  count = 0
  weight = 0
  tare_weight = 0
  pg_production_order_number = 0
  name = 0
  package_sequence = 0
  is_single_weighing = false
  is_semi_finished = false

  
  create(): MrpInterimPackage {
    return new MrpInterimPackage();
  }

  
}