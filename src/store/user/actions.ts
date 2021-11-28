import { Currency } from 'types';
import { ThemeTypes } from './types';

export enum UserActionTypes {
  setTheme = 'USER/SET_THEME',
  toggleTheme = 'USER/TOGGLE_THEME',
  setUserAdress = 'USER/SET_USER_ADRESS',
  addWatchlistToken = 'USER/ADD_WATCHLIST_TOKEN',
  removeWatchlistToken = 'USER/REMOVE_WATCHLIST_TOKEN',
  resetUserState = 'USER/RESET_USER_STATE',
}

export const setTheme = (payload: ThemeTypes) => ({
  type: UserActionTypes.setTheme,
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
