import { Reducer } from 'redux';
import { Currency } from 'types';

import { UserActionTypes } from './actions';
import { ThemeTypes, UserState } from './types';

const initialState: UserState = {
  isDark: false,
  watchlistTokens: {},
  adress: null,
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
    case UserActionTypes.setUserAdress:
      return {
        ...state,
        adress: action.payload,
      };

    case UserActionTypes.addWatchlistToken:
      const { address: addAdress } = action.payload as Currency;

      return {
        ...state,
        watchlistTokens: {
          ...state.watchlistTokens,
          [addAdress]: action.payload,
        },
      };

    case UserActionTypes.removeWatchlistToken:
      const { address: removeAdress } = action.payload as Currency;

      const nextWatchlistTokens = { ...state.watchlistTokens };
      delete nextWatchlistTokens[removeAdress];

      return {
        ...state,
        watchlistTokens: nextWatchlistTokens,
      };

    case UserActionTypes.resetUserState:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
