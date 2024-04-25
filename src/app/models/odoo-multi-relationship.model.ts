export class OdooMultiRelationship<T> {
  typeOfObj: any;
  ids: number[]; // Initial Ids
  values?: T[]; // Object of the corresponding ids

  constructor(typeOfObj: any, ids: number[] = [], values?: T[], ) {
    this.typeOfObj = typeOfObj;
    this.ids = ids;
    this.values = values;
  }
}
