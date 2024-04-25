import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { SaleOrder } from './sale-order.model';
import { OdooRelationship } from './odoo-relationship.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { NaPacchiProduct } from './na-pacchi-product';


export class ProductPackaging extends OdooModel implements OdooSerializableInterface<ProductPackaging> {
  public readonly ODOO_MODEL = 'product.packaging';
  
  name:string = "";
  purchase:boolean = false
  sales:boolean = false
  // location_id:OdooRelationship = new OdooRelationship();
  // new_location_id:OdooRelationship = new OdooRelationship();
  // barcode:string;
  // pacchi_product:OdooMultiRelationship<NaPacchiProduct> = new OdooMultiRelationship(NaPacchiProduct);
  // qty;
  // unit: number;
  // packages: number;
  // barcodes: string[];
  // pacco_from:  OdooRelationship = new OdooRelationship()
  // pacco_to:  OdooRelationship = new OdooRelationship()
  // righe_from:OdooMultiRelationship<StockMove>;



  qty:number = 0
  // constructor(id?: number, barcode?, qty?) {
  //   super(id);
  //   // this.barcode = barcode
  //   // this.qty = qty;
  //   // this.packages = packages;
  //   // this.barcodes = barcodes;
  // }

  create(): ProductPackaging {
    return new ProductPackaging();
  }
}


