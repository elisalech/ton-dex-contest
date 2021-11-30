import { Address, Currency } from 'types';
import { ThemeTypes } from './types';

export enum UserActionTypes {
  setTheme = 'USER/SET_THEME',
  toggleTheme = 'USER/TOGGLE_THEME',
  setUserAddress = 'USER/SET_USER_ADDRESS',
  addWatchlistToken = 'USER/ADD_WATCHLIST_TOKEN',
  removeWatchlistToken = 'USER/REMOVE_WATCHLIST_TOKEN',
  resetUserState = 'USER/RESET_USER_STATE',
  addWatchlistPool = 'USER/ADD_WATCHLIST_POOL',
  removeWatchlistPool = 'USER/REMOVE_WATCHLIST_POOL',
}

export const setTheme = (payload: ThemeTypes) => ({
  type: UserActionTypes.setTheme,
  payload,
});

export const setUserAddress = (payload: Address) => ({
  type: UserActionTypes.setUserAddress,
  payload,
});

export const toggleTheme = () => ({
  type: UserActionTypes.toggleTheme,
});

export const resetUserState = () => ({
  type: UserActionTypes.resetUserState,
});

export const addWatchlistToken = (payload: Currency) => ({
  type: UserActionTypes.addWatchlistToken,
  payload,
});

export const removeWatchlistToken = (payload: Currency) => ({
  type: UserActionTypes.removeWatchlistToken,
  payload,
});

export const addWatchlistPool = (payload: Address) => ({
  type: UserActionTypes.addWatchlistPool,
  payload,
});

export const removeWatchlistPool = (payload: Address) => ({
  type: UserActionTypes.removeWatchlistPool,
  payload,
});
