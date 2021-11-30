import { Address, CurrencyMap } from 'types';

export enum ThemeTypes {
  dark = 'DARK',
  light = 'light',
}

export interface UserState {
  watchlistTokens: CurrencyMap;
  watchlistPools: Address[];
  isDark: boolean;
  address: Address | null;
}
