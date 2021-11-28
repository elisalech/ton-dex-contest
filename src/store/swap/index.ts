import { Reducer } from 'redux';

import { SwapActionTypes } from './actions';
import { Field, ITypeInput, SwapState } from './types';

const initialState: SwapState = {
  independentField: Field.FROM,
  typedValue: '',
  [Field.FROM]: {
    currencyId: '',
  },
  [Field.TO]: {
    currencyId: '',
  },
};

const swapReducer: Reducer<SwapState> = (state = initialState, action) => {
  switch (action.type) {
    case SwapActionTypes.typeInput:
      const { value, field } = action.payload as ITypeInput;

      return {
        ...state,
        typedValue: value,
        independentField: field,
      };
    case SwapActionTypes.switchCurrencies:
      return {
        ...state,
        independentField:
          state.independentField === Field.FROM ? Field.TO : Field.FROM,
        [Field.FROM]: { currencyId: state[Field.TO].currencyId },
        [Field.TO]: { currencyId: state[Field.FROM].currencyId },
      };
    default:
      return state;
  }
};

export default swapReducer;
