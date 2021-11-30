import { useMemo } from 'react';
import { TOKENS_DATA } from 'mocks/tokens';

export default function useFilteredTokens(value: string) {
  return useMemo(() => {
    if (!value) {
      return TOKENS_DATA;
    }

    const query = value.toLowerCase();
    return TOKENS_DATA.filter(
      item =>
        item.name.toLowerCase().includes(query) ||
        item.symbol.toLowerCase().includes(query),
    );
  }, [value]);
}
