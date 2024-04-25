import { BaseObj } from "./base"
import { OdooMultiRelationship } from "./odoo-multi-relationship.model"
import { StockMove } from "./stock-move"

export class SaleOrder extends BaseObj {
  table = "sale.order"
  opportunity_id: [string,string]
  partner_id: [string,string]
}

export class OrderLine {
  order_id: string
  partner_id: string
  id: string
  barcode?: string
  state?: string
  confezioni_qty_lorda?:number
  confezioni_qty_lorda_delivered?:number
  pezzi: number
  name: string
  product_id
  qty_lorda: number
  qty_lorda_po: number
  qty_delivered:number
  qty_received: number
  product_qty: number
  date_planned = new Date().toDateString()
  product_uom
  price_unit = null
  move_ids:OdooMultiRelationship<StockMove> = new OdooMultiRelationship<StockMove>(StockMove)
}

export class PurchaseOrder {
    id : String
    name : String
    state : String
    partner_id : any
    barcode_ids : []
    picking_ids : []
    closed_picking_flag: boolean
}
