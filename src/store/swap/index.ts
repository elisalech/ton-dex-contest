import { Reducer } from 'redux';

import { SwapActionTypes } from './actions';
import { Field, ITypeInput, SwapState } from './types';

const initialState: SwapState = {
  independentField: Field.FROM,
  typedValue: '',
  [Field.FROM]: undefined,
  [Field.TO]: undefined,
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

    case SwapActionTypes.selectCurrency:
      return {
        ...state,
        [state.independentField]: action.payload,
      };

    case SwapActionTypes.selectField:
      return {
        ...state,
        independentField: action.payload,
      };

    case SwapActionTypes.switchCurrencies:
      return {
        ...state,
        independentField:
          state.independentField === Field.FROM ? Field.TO : Field.FROM,
        [Field.FROM]: state[Field.TO],
        [Field.TO]: state[Field.FROM],
        typedValue: '',
      };
    default:
      return state;
  }
};

export default swapReducer;
