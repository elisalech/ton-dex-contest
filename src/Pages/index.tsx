import { Routes, Route } from 'react-router-dom';

import { AppRoutes } from './types';

import HomePage from './HomePage';
import SwapPage from './SwapPage';
import PoolsPage from './PoolsPage';

export default function Pages() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomePage />} />
      <Route path={AppRoutes.SWAP} element={<SwapPage />} />
      <Route path={AppRoutes.POOLS} element={<PoolsPage />} />
    </Routes>
  );
}
