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
