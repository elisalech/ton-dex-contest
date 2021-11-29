import { useEffect } from 'react';

import { fetchPoolsData } from 'store/pools/actions';
import { PoolsStatuses } from 'store/pools/types';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const usePoolsState = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    store => store.pools.status === PoolsStatuses.loading,
  );
  const poolsData = useAppSelector(store => store.pools.poolsData);
  const poolsByAddress = useAppSelector(store => store.pools.poolsByAddress);

  useEffect(() => {
    // TODO: add refetch pools, not only fetch once
    // @ts-ignore
    dispatch(fetchPoolsData());
  }, []);

  return {
    isLoading,
    poolsData,
    poolsByAddress,
  };
};
