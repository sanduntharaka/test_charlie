import { OdooModel } from './odoo-model.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { OdooRelationship } from './odoo-relationship.model';


export class ProductCategory extends OdooModel implements OdooSerializableInterface<ProductCategory> {
  public readonly ODOO_MODEL = 'product.category';

  name: string = "";
  complete_name : string = "";
  parent_id: OdooRelationship;


  constructor(id?: number, name?: string, parent_id = new OdooRelationship()) {
    super(id);
    // this.name = name;
    this.parent_id = parent_id

    
    // this.default_code = default_code;
    // this.codice_fornitore = codice_fornitore;
    // this.description_sale = description_sale;
    // this.prezzo_impresa = prezzo_impresa;
    // this.qty_available = qty_available;
    // this.list_price = list_price;
    // this.uom_id = uom_id;
    // this.qty_on_sale = 0;
    // this.inventory_qty_needed = inventory_qty_needed ;
  }

  create(): ProductCategory {
    return new ProductCategory();
  }
}
