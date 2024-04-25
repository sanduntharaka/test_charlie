


  export class QuantityPickerResult {
    unit: number
    packages?: number
    barcodes: Array<string>
  }

  export class SalePick  {
    qty?:number = 0
    confezioni_qty_lorda?: number
    barcode:string = ""
  }
  export class SaleQuantityPickerResult {
    picks: Array<SalePick> = []
  }
  