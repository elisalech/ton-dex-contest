import { ITypeInput } from './types';

export enum SwapActionTypes {
  typeInput = 'SWAP/TYPE_INPUT',
  switchCurrencies = 'SWAP/SWITCH_CURRENCIES',
}

export const typeInput = (payload: ITypeInput) => ({
  type: SwapActionTypes.typeInput,
  payload,
});

export const switchCurrencies = () => ({
  type: SwapActionTypes.switchCurrencies,
});
