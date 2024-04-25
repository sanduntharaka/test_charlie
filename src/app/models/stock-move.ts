import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { StockMoveLine } from './stock-move-line';
import { Product } from './product.model';
import { ProductTemplate } from './product.template.model';
import { StockPicking } from './stock-picking';
import { StockRule } from './stock-rule';
import { UomUom } from './uom-uom.model';
import { StockLocation } from './stock-location';
import { ProductPackaging } from './product.packaging.model';
import { SaleOrder } from './sale-order.model';
import { SaleOrderLine } from './sale-order-line.model';
import { ProcurementGroup } from './procurement.group.model';
import { StockLocationRoute } from './stock-location-route.model';
import { PurchaseOrderLine } from './purchase-order-line.model';


export class StockMove extends OdooModel implements OdooSerializableInterface<StockMove> {
  public readonly ODOO_MODEL = 'stock.move';

  // unit: number;
  // packages: number;
  // barcodes: string[];
  // pacco_from:  OdooRelationship<Package> = new OdooRelationship<Package>()
  // pacco_to:  OdooRelationship = new OdooRelationship()
  // righe_from:OdooRelationship<NaPacchiProduct>
  
  product_tmpl_id:OdooRelationship<ProductTemplate> = new OdooRelationship<ProductTemplate>()
  product_id:OdooRelationship<Product> = new OdooRelationship<Product>()
  product_packaging_id:OdooRelationship<ProductPackaging> = new OdooRelationship<ProductPackaging>()
  sale_line_id:OdooRelationship<SaleOrderLine> = new OdooRelationship<SaleOrderLine>()
  // product_uom_qty
  // product_uom_qty_po
  // product_uom = ""
  location_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  location_dest_id:OdooRelationship<StockLocation> = new OdooRelationship<StockLocation>()
  move_orig_ids:OdooMultiRelationship<StockMove>  = new OdooMultiRelationship<StockMove>(StockMove)
  move_dest_ids:OdooMultiRelationship<StockMove>  = new OdooMultiRelationship<StockMove>(StockMove)
  // route_ids:OdooMultiRelationship<StockLocationRoute>  = new OdooMultiRelationship<StockLocationRoute>(StockLocationRoute)
  purchase_line_id:OdooRelationship<PurchaseOrderLine>  = new OdooRelationship<PurchaseOrderLine>()
  group_id:OdooRelationship<ProcurementGroup> = new OdooRelationship<ProcurementGroup>()
  move_line_ids: OdooMultiRelationship<StockMoveLine> = new OdooMultiRelationship<StockMoveLine>(StockMoveLine)
  raw_material_production_id = ""
  // state = null
  quantity_done:number = 0
  product_uom:OdooRelationship<UomUom> = new OdooRelationship<UomUom>()
  product_uom_qty:number = null;

  origin:string = ""

  picking_id:OdooRelationship<StockPicking> = new OdooRelationship<StockPicking>()
  // product_uom_price:number = null;
  rule_id:OdooRelationship<StockRule> = new OdooRelationship<StockRule>()
  // move_id:OdooRelationship<StockMove> = new OdooRelationship<StockMove>()

  name:string = ""
  state:string = ""
  forecast_availability:number =  0
  
  should_consume_qty:number = 0
  unit_factor:number = 0
  

  private _checked: any = false;



  constructor(id?: number,) {
    super(id);
    this.id = id;
    // this.name = name
    // this.product_uom_qty = product_uom_qty
    // this.product_uom_qty_po = product_uom_qty_po
    // this.righe_from = new OdooRelationship<NaPacchiProduct>()
    // this.unit = unit;
    // this.packages = packages;
    // this.barcodes = barcodes;
    
  }

  create(): StockMove {
    return new StockMove();
  }
}
