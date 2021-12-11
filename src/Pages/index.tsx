import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppRoutes } from './types';

import PoolPage from './PoolPage';

const HomePage = lazy(() => import('./HomePage'));
const SwapPage = lazy(() => import('./SwapPage'));
const PoolsPage = lazy(() => import('./PoolsPage'));
const CreateLiquidityPage = lazy(() => import('./CreateLiquidityPage'));

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
