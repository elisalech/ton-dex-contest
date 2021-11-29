import { Reducer } from 'redux';

import { PoolData, PoolsMap } from 'types';

import { PoolsActionTypes } from './actions';
import { PoolsState, PoolsStatuses } from './types';

const initialState: PoolsState = {
  poolsData: [],
  poolsByAddress: {},
  status: PoolsStatuses.empty,
};

const poolReducer: Reducer<PoolsState> = (state = initialState, action) => {
  switch (action.type) {
    case PoolsActionTypes.setPools:
      return {
        ...state,
        poolsData: action.payload as PoolData[],
      };
    case PoolsActionTypes.setPoolsByAddress:
      const poolsByAddress = (action.patload as PoolData[]).reduce<PoolsMap>(
        (memo, pool) => {
          memo[pool.pair] = pool;

          return memo;
        },
        {},
      );
      return {
        ...state,
        poolsByAddress,
      };

    case PoolsActionTypes.setPoolsStatus:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default poolReducer;
