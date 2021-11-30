import { Routes, Route } from 'react-router-dom';

import { AppRoutes } from './types';

import HomePage from './HomePage';
import SwapPage from './SwapPage';
import PoolsPage from './PoolsPage';
import PoolPage from './PoolPage';
import CreateLiquidityPage from './CreateLiquidityPage';

export default function Pages() {
  return (
    <Routes>
      <Route path={AppRoutes.SWAP} element={<SwapPage />} />
      <Route
        path={AppRoutes.CREATE_LIQUIDITY}
        element={<CreateLiquidityPage />}
      />
      <Route path={AppRoutes.POOLS} element={<PoolsPage />} />
      <Route path={`${AppRoutes.POOL}/:address`} element={<PoolPage />} />
      <Route path={AppRoutes.HOME} element={<HomePage />} />
    </Routes>
  );
}
