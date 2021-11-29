import { useCallback } from 'react';

import { Currency } from 'types';

import {
  selectCurrency,
  selectField,
  switchCurrencies,
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

  return {
    handleClickSelectButton,
    selectFieldCurrency,
    handleSwitchFields,
  };
};
