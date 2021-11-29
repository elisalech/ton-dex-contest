import { Field } from 'store/swap/types';
import { useAppSelector } from './useAppSelector';

export const useSwapState = () => {
  const tokenFrom = useAppSelector(store => store.swap.from);
  const tokenTo = useAppSelector(store => store.swap.to);

  return {
    tokenFrom,
    tokenTo,
  };
};

export const useFieldToken = (field: Field) =>
  useAppSelector(store => store.swap[field]);
