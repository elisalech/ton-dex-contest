import { useEffect } from 'react';

import { fetchPoolsData } from 'store/pools/actions';

import { useAppDispatch } from './useAppDispatch';

export const useFetchPools = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO: add refetch pools, not only fetch once
    // @ts-ignore
    dispatch(fetchPoolsData());
  }, []);
};
