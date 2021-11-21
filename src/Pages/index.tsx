import { Routes, Route } from 'react-router-dom';

import { AppRoutes } from './types';

import HomePage from './HomePage';
import SwapPage from './SwapPage';

export default function Pages() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomePage />} />
      <Route path={AppRoutes.SWAP} element={<SwapPage />} />
    </Routes>
  );
}
