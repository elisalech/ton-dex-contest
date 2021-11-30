import { useCallback } from 'react';

import LiquidityService from 'services/LiquidityService';

export const useLiquidityActions = () => {
  const handleCreateLiquidity = useCallback(() => {
    LiquidityService.createTransaction();
  }, []);

  return {
    handleCreateLiquidity,
  };
};
