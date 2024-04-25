import { OdooSerializableInterface } from "../shared/interfaces/odoo-serializable-interface";
import { OdooModel } from "./odoo-model.model";
import { OdooMultiRelationship } from "./odoo-multi-relationship.model";
import { OdooRelationship } from "./odoo-relationship.model";
import { StockPicking } from "./stock-picking";

export class StockBackorderConfirmation extends OdooModel implements OdooSerializableInterface<StockBackorderConfirmation> {
    
    create() {
        return new StockBackorderConfirmation()
    }
    public readonly ODOO_MODEL = "stock.backorder.confirmation";
  
    id: number;
    pick_ids: OdooMultiRelationship<StockPicking> = new OdooMultiRelationship(StockPicking)
    backorder_confirmation_line_ids:OdooMultiRelationship<StockBackorderConfirmationLine> = new OdooMultiRelationship<StockBackorderConfirmationLine>(StockBackorderConfirmationLine)
    button_validate_picking_ids:OdooMultiRelationship<StockPicking> = new OdooMultiRelationship<StockPicking>(StockPicking)
}


export class StockBackorderConfirmationLine extends OdooModel {

    public readonly ODOO_MODEL = "stock.backorder.confirmation.line";
    
    id:number
    backorder_confirmation_id: OdooRelationship<StockBackorderConfirmation> = new OdooRelationship<StockBackorderConfirmation>()
    picking_id:OdooRelationship<StockPicking> = new OdooRelationship<StockPicking>()
    to_backorder:boolean = false
    // fields.Many2one('stock.picking', 'Transfer')
    // to_backorder = fields.Boolean('To Backorder')

    create() {
        return new StockBackorderConfirmationLine()
    }

}

// _name = 'stock.backorder.confirmation.line'