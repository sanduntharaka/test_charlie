import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { SaleOrderLine } from './sale-order-line.model';
import { OdooSerializableInterface } from '../shared/interfaces/odoo-serializable-interface';
import { GenericOrder } from './generic-order';
import { OdooRelationship } from './odoo-relationship.model';
import { Placeholder } from './placeholder.model';
import { IConnectable, TrelloCardEntry2 } from './trello-card';
import { OdooModel } from './odoo-model.model';
import { Contact } from './contact.model';

export class CalendarEvent extends OdooModel implements OdooSerializableInterface<CalendarEvent> {
  
  public readonly ODOO_MODEL = 'calendar.event';
  public readonly ORDER_TYPE = CalendarEvent;

  id: number = 0
  name : string = ""
  attendee_status : string =""
  start : string = ""
  stop : string = ""
  partner_id:OdooRelationship<Contact>
  res_model_id = 0
  
  // duration"
  // stop"
  // allday"
  // attendee_status"
  // partner_ids"
  // is_highlighted"
  // is_organizer_alone"
  // display_description"
  // location"
  // description"
  // privacy"
  // alarm_ids"
  // categ_ids"
  // recurrency"
  // recurrence_update"
  // partner_id"


  constructor(id?: number) {
    super(id);
    this.partner_id = new OdooRelationship();

    // this.incoterm = new OdooRelationship();
    // this.order_line = new OdooMultiRelationship<SaleOrderLine>(SaleOrderLine);
  }

  create() {
    return new CalendarEvent()
  }

}
