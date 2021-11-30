import { useMemo } from 'react';

import { Currency, TokenAmount, TokenAmountMap } from 'types';

import { TOKENS_DATA } from 'mocks/tokens';
import { generateAmount } from 'mocks/balances';

import useWalletAddress from './useWalletAdress';

const MOCK_BALANCES_CACHE: TokenAmountMap = {};

export const useTokenBalances = (): TokenAmountMap => {
  const account = useWalletAddress();

  // TODO: add TON blockchain listener-hook to dynamically update balances
  // const balances = useFetchBalances() ...

  return useMemo(
    () =>
      account && TOKENS_DATA.length > 0
        ? TOKENS_DATA.reduce<TokenAmountMap>((memo, currency) => {
            // TODO: remove balances cache logic later
            if (!MOCK_BALANCES_CACHE[currency.address]) {
              MOCK_BALANCES_CACHE[currency.address] = {
                amount: generateAmount(),
                currency,
              };
            }

            memo[currency.address] = MOCK_BALANCES_CACHE[currency.address];
            return memo;
          }, {})
        : {},
    [account],
  );
};

export function useTokenBalance(token?: Currency): TokenAmount | undefined {
  const tokenBalances = useTokenBalances();

  return token ? tokenBalances[token.address] : undefined;
}
