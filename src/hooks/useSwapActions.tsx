import { useCallback } from 'react';

import { Currency } from 'types';

import SwapService from 'services/SwapService';

import {
  selectCurrency,
  selectField,
  switchCurrencies,
  typeInput,
} from 'store/swap/actions';
import { Field } from 'store/swap/types';

import CurrencySearchModal from 'Views/Swap/CurrencySearchModal/CurrencySearchModal';

import { useAppDispatch } from './useAppDispatch';
import useModal from './useModal';

export const useSwapActions = () => {
  const dispatch = useAppDispatch();

  const [openModal, onDismiss] = useModal(<CurrencySearchModal />);

  const handleClickSelectButton = useCallback(
    (field: Field) => {
      dispatch(selectField(field));
      openModal();
    },
    [openModal],
  );

  const selectFieldCurrency = useCallback(
    (currency: Currency) => {
      dispatch(selectCurrency(currency));
      onDismiss();
    },
    [openModal],
  );

  const handleSwitchFields = useCallback(() => {
    dispatch(switchCurrencies());
  }, [openModal]);

  const handleTypeAction = useCallback(
    (typedField: Field, value: string) => {
      dispatch(typeInput({ field: typedField, value }));
    },
    [openModal],
  );

  const handleSwap = useCallback(() => {
    SwapService.createTransaction();
  }, []);

  return {
    handleClickSelectButton,
    selectFieldCurrency,
    handleSwitchFields,
    handleTypeAction,
    handleSwap,
  };
};
