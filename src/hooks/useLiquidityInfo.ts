import { MOCK_LIQUIDITY_COST_RATES } from 'mocks/costRate';
import { useMemo } from 'react';
import { useSwapState } from './useSwapState';

type StatsData = Array<{ label: string; value: string }>;

export const useLiquidityInfo = () => {
  const { tokenFrom, tokenTo } = useSwapState();

  const statsData: StatsData = useMemo(
    () => [
      {
        label: `${tokenFrom?.symbol} per USD`,
        value: MOCK_LIQUIDITY_COST_RATES.address0.toString(),
      },
      {
        label: `${tokenTo?.symbol} per USD`,
        value: MOCK_LIQUIDITY_COST_RATES.address1.toString(),
      },
    ],
    [tokenFrom, tokenTo],
  );

  if (!tokenFrom || !tokenTo) return null;
  return statsData;
};
