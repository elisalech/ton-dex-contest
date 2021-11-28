import { Address, CurrencyMap } from 'types';

export enum ThemeTypes {
  dark = 'DARK',
  light = 'light',
}

export interface UserState {
  watchlistTokens: CurrencyMap;
  isDark: boolean;
  adress: Address | null;
}
