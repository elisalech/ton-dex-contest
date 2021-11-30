import { PoolsStatuses } from 'store/pools/types';

import { useAppSelector } from './useAppSelector';

export const usePoolsState = () => {
  const isLoading = useAppSelector(
    store => store.pools.status === PoolsStatuses.loading,
  );
  const poolsData = useAppSelector(store => store.pools.poolsData);
  const poolsByAddress = useAppSelector(store => store.pools.poolsByAddress);

  return {
    isLoading,
    poolsData,
    poolsByAddress,
  };
};
