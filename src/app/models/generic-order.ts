import { OdooModel } from './odoo-model.model';
import { OdooMultiRelationship } from './odoo-multi-relationship.model';
import { OdooRelationship } from './odoo-relationship.model';
import { StockPicking } from './stock-picking';
import { Placeholder } from './placeholder.model';
import { Lead } from './crm.lead.model';
import { AccountPaymentTerm } from './account-payment-term.model';
import { Partner } from './partner';
import { Contact } from './contact.model';
import { User } from './user.model';

/**
 * Fields in common between SaleOrder and Purchaseorder
 */
export abstract class GenericOrder extends OdooModel {



    access_token: string;
    access_url: string;
    access_warning: string;
    activity_date_deadline: string;
    activity_ids: OdooMultiRelationship<any>;
    activity_state: string;
    activity_summary: string;
    activity_type_id: OdooRelationship;
    activity_user_id: OdooRelationship;
    amount_tax: string;
    amount_total: number = 0;
    amount_untaxed: number = 0;
    closed_picking_flag: string;
    company_id: OdooRelationship;
    create_date: string;
    create_uid: string;
    currency_id: OdooRelationship;
    date_order: string;
    destinazione: string;
    display_name: string;
    fiscal_position_id: OdooRelationship;
    invoice_count: string;
    invoice_ids: OdooMultiRelationship<any>;
    invoice_status: string;
    message_attachment_count: string;
    // message_channel_ids: OdooMultiRelationship<any>;
    message_follower_ids: OdooRelationship;
    message_has_error: boolean;
    message_has_error_counter: number;
    message_ids: OdooRelationship;
    message_is_follower: boolean;
    message_main_attachment_id: OdooRelationship;
    message_needaction: boolean;
    message_needaction_counter: number;
    message_partner_ids: OdooMultiRelationship<any>;
    message_unread: boolean;
    message_unread_counter: number;
    name: string;


    // order_line: OdooMultiRelationship<any>;
    origin: string;
    partner_id: OdooRelationship<Contact> = new OdooRelationship<Contact>();
    payment_term_id: OdooRelationship<AccountPaymentTerm> = new OdooRelationship<AccountPaymentTerm>();
    picking_ids: OdooMultiRelationship<StockPicking>;
    picking_state: string;
    // referente_id: OdooRelationship;
    stamp_gsheet: string;
    state: string = "";
    user_id: OdooRelationship<User> = new OdooRelationship<User>();
    // users_sheet: OdooMultiRelationship<any>;
    website_message_ids: OdooMultiRelationship<any>;
    write_date: string;
    write_uid: OdooRelationship;


    constructor(id?: number, name?: string) {
        super(id);

        this.activity_ids = new OdooMultiRelationship(Placeholder);
        this.activity_type_id = new OdooRelationship();
        // this.activity_user_id = new OdooRelationship();
        // this.company_id = new OdooRelationship();
        // this.fiscal_position_id = new OdooRelationship();
        // this.invoice_ids = new OdooMultiRelationship(Placeholder);
        // this.message_channel_ids = new OdooMultiRelationship(Placeholder);
        // this.message_follower_ids = new OdooRelationship();
        // this.message_ids = new OdooRelationship();
        // this.message_main_attachment_id = new OdooRelationship();
        // this.message_partner_ids = new OdooMultiRelationship(Placeholder);
        // this.opportunity_id = new OdooRelationship();
        // this.order_line = new OdooMultiRelationship(Placeholder);
        this.partner_id = new OdooRelationship();
        this.payment_term_id = new OdooRelationship();
        this.picking_ids = new OdooMultiRelationship<StockPicking>(StockPicking);
        // this.referente_id = new OdooRelationship();
        this.user_id = new OdooRelationship();
        // this.users_sheet = new OdooMultiRelationship(Placeholder);
        this.website_message_ids = new OdooMultiRelationship(Placeholder);
        this.write_uid = new OdooRelationship();
        this.name = name;
        this.create_date = "";

    }

    getCreationDate() {
        return new Date(Date.parse(this.create_date)).toLocaleDateString('it', { day:'numeric', month:'long', year:'numeric' });  
      }
}

