export interface ActionButton {
  action: string;
  labelName: string;
  color: string;
  active: boolean;
}

export interface ActionIcon {
  action: string;
  icon: string;
  active: boolean;
  subMenu?: {
    action: string,
    name: string
  };
  subForm?: {
    type: 'AddInput' | 'SelectInput',
    ngModel: any,
    action?: string,
    buttons: ActionButton[]
  };
}
