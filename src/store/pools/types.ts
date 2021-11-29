import { PoolData, PoolsMap } from 'types';

export enum PoolsStatuses {
  empty = 'EMPTY',
  loading = 'LOADING',
  fetching = 'FETCHING',
  fulfilled = 'FULFILLED',
  refetching = 'REFETCHING',
  rejected = 'REJECTED',
}

export interface PoolsState {
  poolsData: PoolData[];
  poolsByAddress: PoolsMap;
  status: PoolsStatuses;
}
