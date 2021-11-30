import { useMemo } from 'react';

import { PoolData } from 'types';

import { useAppSelector } from './useAppSelector';

export const useWatchlistPools = () => {
  const watchlistPools = useAppSelector(store => store.user.watchlistPools);

  const poolsByAddress = useAppSelector(store => store.pools.poolsByAddress);

  // @ts-ignore
  const data: PoolData[] = useMemo(
    () =>
      watchlistPools
        .map(address => poolsByAddress[address])
        .filter(item => item !== undefined),
    [poolsByAddress, watchlistPools],
  );

  return data;
};
