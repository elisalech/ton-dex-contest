import { Currency } from 'types';
import { Field, ITypeInput } from './types';

export enum SwapActionTypes {
  typeInput = 'SWAP/TYPE_INPUT',
  switchCurrencies = 'SWAP/SWITCH_CURRENCIES',
  selectField = 'SWAP/SELECT_FIELD',
  selectCurrency = 'SWAP/SELECT_CURRENCY',
}

export const typeInput = (payload: ITypeInput) => ({
  type: SwapActionTypes.typeInput,
  payload,
});

export const selectField = (payload: Field) => ({
  type: SwapActionTypes.selectField,
  payload,
});

export const selectCurrency = (payload: Currency) => ({
  type: SwapActionTypes.selectCurrency,
  payload,
});

export const switchCurrencies = () => ({
  type: SwapActionTypes.switchCurrencies,
});
