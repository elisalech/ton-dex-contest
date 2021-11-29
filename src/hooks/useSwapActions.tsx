import { useCallback } from 'react';
import { selectCurrency, selectField } from 'store/swap/actions';

import { Field } from 'store/swap/types';
import { Currency } from 'types';
import CurrencySearchModal from 'Views/Swap/CurrencySearchModal/CurrencySearchModal';
import { useModal } from 'widgets/Modal';

import { useAppDispatch } from './useAppDispatch';

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

  return {
    handleClickSelectButton,
    selectFieldCurrency,
  };
};
