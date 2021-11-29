import { Currency } from 'types';

export enum Field {
  FROM = 'from',
  TO = 'to',
}

export interface SwapState {
  independentField: Field;
  typedValue: string;
  [Field.FROM]: Currency | undefined;
  [Field.TO]: Currency | undefined;
}

export interface ITypeInput {
  field: Field;
  value: string;
}
