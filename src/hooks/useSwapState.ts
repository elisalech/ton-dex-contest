import { MOCK_COST_RATES } from 'mocks/costRate';
import { useMemo } from 'react';

import { Field } from 'store/swap/types';

import { useAppSelector } from './useAppSelector';
import { useTokenBalance } from './useTokenBalances';

export const useSwapState = () => {
  const tokenFrom = useAppSelector(store => store.swap.from);
  const tokenTo = useAppSelector(store => store.swap.to);
  const typedValue = useAppSelector(store => store.swap.typedValue);

  const balance = useTokenBalance(tokenFrom);

  const canSwap = useMemo(() => {
    if (!balance || !typedValue || !tokenTo || !tokenFrom) return false;
    if (parseFloat(balance.amount) < parseFloat(typedValue)) return false;

    return true;
  }, [balance, typedValue, tokenTo, tokenFrom]);

  const toValue = useMemo(
    () => (typedValue ? parseFloat(typedValue) * MOCK_COST_RATES : ''),
    [balance, typedValue],
  );

  return {
    tokenFrom,
    tokenTo,
    canSwap,
    toValue,
  };
};

export const useFieldToken = (field: Field) =>
  useAppSelector(store => store.swap[field]);
