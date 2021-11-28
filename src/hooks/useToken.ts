import { TOKENS_DATA } from 'mocks/tokens';
import { useMemo } from 'react';

import { Address, Currency } from 'types';

export const useSearchToken = (query?: Address): Currency => {
  return TOKENS_DATA[0];
  // return useMemo(() => {}, [query]);
};
