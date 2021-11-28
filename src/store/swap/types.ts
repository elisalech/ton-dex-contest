export enum Field {
  FROM = 'from',
  TO = 'to',
}

export interface SwapState {
  independentField: Field;
  typedValue: string;
  [Field.FROM]: {
    currencyId: string | undefined;
  };
  [Field.TO]: {
    currencyId: string | undefined;
  };
}

export interface ITypeInput {
  field: Field;
  value: string;
}
