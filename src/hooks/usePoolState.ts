import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { PoolsStatuses } from 'store/pools/types';

import { useAppSelector } from './useAppSelector';

export const usePoolState = () => {
  const { address } = useParams();

  const isLoading = useAppSelector(
    store => store.pools.status === PoolsStatuses.loading,
  );

  const poolsByAddress = useAppSelector(store => store.pools.poolsByAddress);

  const data = useMemo(
    () => (address && poolsByAddress[address]) || null,
    [poolsByAddress, address],
  );

  return { data, isLoading };
};
