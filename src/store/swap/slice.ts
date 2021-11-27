import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Field, SwapState } from './types';

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

const swapSlice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    typeInput: (
      state,
      action: PayloadAction<{ field: Field; value: string }>,
    ) => {
      state.typedValue = action.payload.value;
      state.independentField = action.payload.field;
    },
    switchCurrencies: state => {
      const prevToCurrencyId = state[Field.TO].currencyId;
      const prevFromCurrencyId = state[Field.FROM].currencyId;

      state.independentField =
        state.independentField === Field.TO ? Field.FROM : Field.TO;
      state[Field.TO].currencyId = prevFromCurrencyId;
      state[Field.FROM].currencyId = prevToCurrencyId;
    },
  },
});
