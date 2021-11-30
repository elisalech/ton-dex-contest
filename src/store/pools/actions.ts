import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import PoolsService from 'services/PoolsService';

import { PoolData } from 'types';
import { PoolsStatuses } from './types';

export enum PoolsActionTypes {
  setPools = 'POOLS/SET_POOLS',
  setPoolsStatus = 'POOLS/SET_POOLS_STATUS',
  setPoolsByAddress = 'POOLS/SET_POOLS_BY_ADDRESS',
}

export const setPools = (payload: PoolData[]) => ({
  type: PoolsActionTypes.setPools,
  payload,
});

export const setPoolsByAddress = (payload: PoolData[]) => ({
  type: PoolsActionTypes.setPoolsByAddress,
  payload,
});

export const setPoolsStatus = (payload: PoolsStatuses) => ({
  type: PoolsActionTypes.setPoolsStatus,
  payload,
});

export const fetchPoolsData: ActionCreator<
  ThunkAction<Promise<void>, {}, {}, any>
> =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setPoolsStatus(PoolsStatuses.loading));
    try {
      const data = await PoolsService.getPools();

      if (!data || !Array.isArray(data)) {
        throw new Error('pools data is empty');
      }

      dispatch(setPoolsByAddress(data));
      dispatch(setPools(data));

      dispatch(setPoolsStatus(PoolsStatuses.fulfilled));
    } catch (e) {
      console.log('Error: ', e);
      dispatch(setPoolsStatus(PoolsStatuses.rejected));
    }
  };
