import { Reducer } from 'redux';
import { Currency } from 'types';

import { UserActionTypes } from './actions';
import { ThemeTypes, UserState } from './types';

const initialState: UserState = {
  isDark: false,
  watchlistPools: [],
  watchlistTokens: {},
  address: null,
};

const userReducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.toggleTheme:
      return {
        ...state,
        isDark: !state.isDark,
      };
    case UserActionTypes.setTheme:
      return {
        ...state,
        isDark: (action.payload as ThemeTypes) === ThemeTypes.dark,
      };
    case UserActionTypes.setUserAddress:
      return {
        ...state,
        address: action.payload,
      };

    case UserActionTypes.addWatchlistToken:
      const { address: addAddress } = action.payload as Currency;

      return {
        ...state,
        watchlistTokens: {
          ...state.watchlistTokens,
          [addAddress]: action.payload,
        },
      };

    case UserActionTypes.removeWatchlistToken:
      const { address: removeAddress } = action.payload as Currency;

      const nextWatchlistTokens = { ...state.watchlistTokens };
      delete nextWatchlistTokens[removeAddress];

      return {
        ...state,
        watchlistTokens: nextWatchlistTokens,
      };

    case UserActionTypes.addWatchlistPool:
      return {
        ...state,
        watchlistPools: [...state.watchlistPools, action.payload],
      };

    case UserActionTypes.removeWatchlistPool:
      return {
        ...state,
        watchlistPools: state.watchlistPools.filter(
          item => item !== action.payload,
        ),
      };

    case UserActionTypes.resetUserState:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
