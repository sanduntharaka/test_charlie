import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';


export class NaPacchiProduct extends OdooModel implements OdooSerializableInterface<NaPacchiProduct> {
  public readonly ODOO_MODEL = 'na.pacchi.product';

  id: number;
  // unit: number;
  // packages: number;
  
  
  // qty
  // pacco_from:  OdooRelationship = new OdooRelationship()
  // pacco_to:  OdooRelationship = new OdooRelationship()
  // righe_from:OdooMultiRelationship<StockMove>;
  product_id:OdooRelationship = new OdooRelationship()
  // product_uom_qty
  // product_uom_qty_po
  // state = null
  qty:number
  qty_reserved:number
  quantity_sale_udm:number
  barcode: string;
  lunghezza: number;
  larghezza: number;
  spessore: number;
  
  
  // name:string = ""
  constructor(id?: number, qty?,qty_reserved?,quantity_sale_udm?, barcode?,lunghezza?, larghezza?, spessore?) {
    super(id)
    this.id = id
    this.qty = qty
    this.qty_reserved = qty_reserved
    this.quantity_sale_udm = quantity_sale_udm
    // this.name = name
    // this.product_uom_qty = product_uom_qty
    // this.product_uom_qty_po = product_uom_qty_po
    // this.unit = unit;
    // this.packages = packages;
    this.barcode = barcode
    this.lunghezza = lunghezza
    this.larghezza = larghezza
    this.spessore = spessore
  }

  create(): NaPacchiProduct {
    return new NaPacchiProduct();
  }
}
