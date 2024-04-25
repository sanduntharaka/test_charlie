import { BaseObj } from "./base"

export class Deal extends BaseObj {
  
  table="crm.lead"
  name:string
  area: string
  partner_id
  description:string
  stage_id
  drive_link_docs:string
  drive_link_production:string
  drive_link_project:string
  drive_link_pos: any
  city:string
  street:string
  user_id
  orders_ids: string[] = []
  lng: any
  lat: any
  cordinates: string // lat,lng
  
  _isExpressSale:boolean = false

  getTitle() {
    return this.partner_id.name  + " - " + this.city + " - " + this.name + " - " + this.id  
  }
  
  getUserShort = (x) => {
    var s = this.user_id[1].split(" ")
    return s.length > 1  ? s.map(x => x[0]).join("") : this.user_id[1]
  }
  
  getTrelloDescription(): string {
    var r = `[Link]${this.drive_link_docs}`
    return r 
  }
}

export class Stage extends BaseObj {
  table= "crm.stage"
  sequence:number
  name:string
  display_name:string
}

export enum DealStatus {
  NEW = 0,
  QUOTE = 1,
  PROJECT = 2,
  PRODUCTION = 3
}



export const PRINT_ATTENDANCE_CFG = {
  spool_folder_id: "1XIHgFV1yrwpJFoRcc1K1Q8JgTt45RzYA",
  template_sheet_id: "11pFKW7kMQ3b6fJkWdKlmnXWdhikcNVl6T5_GFXqlVXM"
}

export const PRINTS_CFG = {
  spool_folder_id: "1eeUoKxx9HaTYuMGuF-xcGfC6bVkHrwoK",
  template_sheet_id: "1k_nznz5fMeW7FP8WXmq8uqBeAXqPIR2R_FkaYtjn020",
  template_purchase_embedded_sheet_id: "1ZiajqLxt66Ftq0KyyTqqRgru9GzszzTdQvvNsDPbewY"
}

export const PRINTS_PURCHASE_CFG = {
  // spool_folder_id: "https://docs.google.com/spreadsheets/d/1wRtfJCjPvESj4IqVMuGn7aQvrlr3qwW5moivncv_Mi8/edit#gid=498268299",
  spool_folder_id: "1eeUoKxx9HaTYuMGuF-xcGfC6bVkHrwoK",
  template_sheet_id: "1wRtfJCjPvESj4IqVMuGn7aQvrlr3qwW5moivncv_Mi8"
}

export const PRINTS_PICKING_CFG = {
  // spool_folder_id: "https://docs.google.com/spreadsheets/d/1wRtfJCjPvESj4IqVMuGn7aQvrlr3qwW5moivncv_Mi8/edit#gid=498268299",
  spool_folder_id: "1eeUoKxx9HaTYuMGuF-xcGfC6bVkHrwoK",
  // template_sheet_id: "12AOeIvDlu3qVmepZ6KE_o-OeJG0W8hHN6e0yj1tZzN8"
}

export const FIDI_CFG = {
  trelloListId: "6102821e14f9f88b6dfbcbc9",
  trelloBoardId : "610281f5c1c66e492f118c7f"
}



export const AREAS_CFG = [
  {
    "name": "Aziendale",
    "src" : "1jm1b9W_slszC3CvhNjNTKJ3upddsUlU8",
    "dst" : "147jeUg9ZeW3EOoXyk06ZNbzY2DXFM3y0",
    "preventivo_trello_board": null,
    "preventivo_trello_list": null,

    "project_src" : "1jm1b9W_slszC3CvhNjNTKJ3upddsUlU8",
    "project_trello" : null,
    "project_trello_board": null,

    "produzione_src": "1kBrd1sqhcCbb8RKDwbKhidSiK-fdaJdY",
    "produzione_dst": "1QMWhFiMKgEZh_yL6wfB5gH3MkytiwB0J",
    "produzione_trello" : "600819932c0f41014f9ba175",
    "produzione_trello_board" : "5c910c36323dbb560103a1ff",
    "produzione_link_name" : "04 - Produzione linea tetti",
   
    "pos_src" : null,
    "pos_dst" : null,
    "pos_trello_board": null,
    "pos_trello_list": null,
    "pos_template_card": null,
    "pos_link_name" : "05 - Sicurezza cantiere",
    
    "purchase_drive_src" : "1ljjKRuu0PR58ZGNMknkw3UVa4AfFce5W",
    "purchase_drive_dst" : "1oLEAo4uHnBoObsDlelxkRwgQVNsWpY48",
    "purchase_link_name" : "Acquisto"
  },
  {
    "name": "Case",
    "src" : "1ZaGNzWJ7EinXMVKuP5VCQzD5af1dqfQ0",
    "dst" : "1xeQGk0aU_Z0rJPoShG3lY0E5DqxokLog",
    "preventivo_trello_board": "565f1c15aefe2e1ea3e322b0",
    "preventivo_trello_list": "565f1c15aefe2e1ea3e322b1",
    
    "project_src" : "1_q32bZBlfLJyeRhCrmuAnlaf3833WqTM",
    "project_trello" : "600819652c976414affae318",
    "project_trello_board": "5c910bee7ed7a80d416e7ab9",

    "produzione_src": "1kBrd1sqhcCbb8RKDwbKhidSiK-fdaJdY",
    "produzione_dst": "1QMWhFiMKgEZh_yL6wfB5gH3MkytiwB0J",
    "produzione_trello" : "600819932c0f41014f9ba175",
    "produzione_trello_board" : "5c910c36323dbb560103a1ff",
    "produzione_link_name" : "04 - Produzione linea tetti",

    "pos_src" : "1_6yF8NILEYdFkM4orAP9T4uSqgqaPalo",
    "pos_dst" : "1S5NK0iCuw6pU159XZhhMWE7BsrtUbVCR",
    "pos_trello_board": "65e1d8f494b56f332707797e",
    "pos_trello_list": "65e1d8f494b56f3327077980",
    "pos_template_card": "65e1d8f494b56f3327077999",
    "pos_link_name" : "05 - Sicurezza cantiere",

    "purchase_drive_src" : "1ljjKRuu0PR58ZGNMknkw3UVa4AfFce5W",
    "purchase_drive_dst" : "1oLEAo4uHnBoObsDlelxkRwgQVNsWpY48",
    "purchase_link_name" : "07 - Acquisto"
  },
  {
    "name": "Facciate e Decking",
    "src" : "1RsqhfTS3tauQA0byFO0HronzlFLkkEHO",
    "dst" : "1GSXV73U_QBk0e4FYQq9-YXAbMLt40HT3",
    "preventivo_trello_board": "54ad1493f2846888caafe1e8",
    "preventivo_trello_list": "573db24f4076c61e50a49109",
    "project_src" : "1pb41fczPeUC3VyHwlfigBN0WY7T0Ju2C",
    "project_trello" : "600819652c976414affae318",
    "project_trello_board": "5c910bee7ed7a80d416e7ab9",
    "produzione_src": "1kBrd1sqhcCbb8RKDwbKhidSiK-fdaJdY",
    "produzione_dst": "1QMWhFiMKgEZh_yL6wfB5gH3MkytiwB0J",
    "produzione_trello" : "600819932c0f41014f9ba175",
    "produzione_trello_board" : "5c910c36323dbb560103a1ff",
    "produzione_link_name" : "04 - Produzione linea tetti",
    "pos_src" : "1_6yF8NILEYdFkM4orAP9T4uSqgqaPalo",
    "pos_dst" : "1S5NK0iCuw6pU159XZhhMWE7BsrtUbVCR",
    "pos_trello_board": "65e1d8f494b56f332707797e",
    "pos_trello_list": "65e1d8f494b56f3327077980",
    "pos_template_card": "65e1d8f494b56f3327077999",
    "pos_link_name" : "05 - Sicurezza cantiere ",

    "purchase_drive_src" : "1ljjKRuu0PR58ZGNMknkw3UVa4AfFce5W",
    "purchase_drive_dst" : "1oLEAo4uHnBoObsDlelxkRwgQVNsWpY48",
    "purchase_link_name" : "Acquisto"
  },
  {
    "name": "Massello",
    "src" : "1QvOsDhTSQ7DYpFDgWrD9NJKxYZoj_c1u",
    "dst" : "0AOXQc7jEZFUxUk9PVA",
    "preventivo_trello_list": null,
    "preventivo_trello_board": null,
    "pos_src" : null,
    "pos_dst" : null,
    "pos_trello_board": null,
    "pos_trello_list": null,
    "pos_template_card": null,
    "pos_link_name" : null,
  },
  {
    "name": "Pavimenti",
    "src" : "1OC0xPh3OQlK48z-pH_VZlTS2mmYYKmU5",
    "dst" : "1lJMMmMgzZD9yqzP1hhVL4PAUIdK0BOH5",
    "preventivo_trello_list": "56b8a64520a6da342e99ad27",
    "preventivo_trello_board": "565f1c15aefe2e1ea3e322b0",
    
    "pos_src" : "1_6yF8NILEYdFkM4orAP9T4uSqgqaPalo",
    "pos_dst" : "1S5NK0iCuw6pU159XZhhMWE7BsrtUbVCR",
    "pos_trello_board": "65e1d8f494b56f332707797e",
    "pos_trello_list": "65e1d8f494b56f3327077980",
    "pos_template_card": "65e1d8f494b56f3327077999",
    "pos_link_name" : "05 - Sicurezza cantiere ",
  },
  {
  
    "name": "Tetti",  
    "src" : "1kzU_Fx6NmdrkveiM6ulJ7ZL0SI0iucBw", //id drive preventivo/progetto sorgente
    "dst" : "1F5dxs4dhmOIdV4AyNWFNJm-8EY-BE9Xc",  //id drive preventivo/progetto destinazione
    "preventivo_trello_board": "52f3787566d34a102141fb9f",
    "preventivo_trello_list": "600847ca43ea131ef8690b53",
    
    "project_src" : "14J3D_2DowKwGFkSp7a7vVryPKLx1LC69", 
    "project_trello" : "600819652c976414affae318",
    "project_trello_board": "5c910bee7ed7a80d416e7ab9",
    
    "produzione_src": "1kBrd1sqhcCbb8RKDwbKhidSiK-fdaJdY",
    "produzione_dst": "1QMWhFiMKgEZh_yL6wfB5gH3MkytiwB0J",
    "produzione_trello" : "600819932c0f41014f9ba175",
    "produzione_trello_board" : "5c910c36323dbb560103a1ff",
    "produzione_link_name" : "04 - Produzione linea tetti",
    
    "pos_src" : "1_6yF8NILEYdFkM4orAP9T4uSqgqaPalo",
    "pos_dst" : "1S5NK0iCuw6pU159XZhhMWE7BsrtUbVCR",
    "pos_trello_board": "65e1d8f494b56f332707797e",
    "pos_trello_list": "65e1d8f494b56f3327077980",
    "pos_template_card": "65e1d8f494b56f3327077999",
    "pos_link_name" : "05 - Sicurezza cantiere",
    
    "purchase_drive_src" : "1ljjKRuu0PR58ZGNMknkw3UVa4AfFce5W",
    "purchase_drive_dst" : "1oLEAo4uHnBoObsDlelxkRwgQVNsWpY48",
    "purchase_link_name" : "Acquisto",

    "production_product_id" : 64232
  }
]