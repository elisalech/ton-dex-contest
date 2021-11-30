import { useMemo } from 'react';

import { Address, TokenAmount, TokenAmountMap } from 'types';

import { generateAmount } from 'mocks/balances';

import useWalletAddress from './useWalletAdress';
import { usePoolsState } from './usePoolsState';

const MOCK_LIQUIDITY_BALANCES_CACHE: TokenAmountMap = {};

export const useLiquidityBalances = (): TokenAmountMap => {
  const account = useWalletAddress();
  const { poolsData } = usePoolsState();

  // TODO: add TON blockchain listener-hook to dynamically update balances
  // const balances = useFetchBalances() ...

  return useMemo(
    () =>
      account && poolsData.length > 0
        ? poolsData.reduce<TokenAmountMap>((memo, pool) => {
            // TODO: remove balances cache logic later
            if (!MOCK_LIQUIDITY_BALANCES_CACHE[pool.pair]) {
              MOCK_LIQUIDITY_BALANCES_CACHE[pool.pair] = {
                amount: generateAmount(),
                pool,
              };
            }

            memo[pool.pair] = MOCK_LIQUIDITY_BALANCES_CACHE[pool.pair];
            return memo;
          }, {})
        : {},
    [account],
  );
};

export function useLiquidityBalance(
  address?: Address,
): TokenAmount | undefined {
  const liquidityBalances = useLiquidityBalances();

  return address ? liquidityBalances[address] : undefined;
}
