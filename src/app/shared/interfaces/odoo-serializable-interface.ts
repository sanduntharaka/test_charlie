export interface OdooSerializableInterface<T> {
  ODOO_FIELDS?: string[];
  ODOO_MODEL: string;
  id?: number;

  deserialize(input: any): T;
  fields()
}
