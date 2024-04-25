import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { StockMove } from './stock-move';
import { StockMoveLine } from './stock-move-line';
import { OdooRelationship } from './odoo-relationship.model';
import { StockPickingType } from './stock-picking-type.model';
import { ProcurementGroup } from './procurement.group.model';
import { Partner } from './partner';
import { StockLocation } from './stock-location';
import { StockPackageLevel } from './stock-package-level';


export class DeliveryCarrier extends OdooModel implements OdooSerializableInterface<DeliveryCarrier> {

  public readonly ODOO_MODEL = 'delivery.carrier';
  id: number;
  name:string = ""

  constructor(id?: number) {
    super(id);
    this.id = id;
  }

  create(): DeliveryCarrier {
    return new DeliveryCarrier();
  }
}
