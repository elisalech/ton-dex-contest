import { useFetchPools } from 'hooks/useFetchPools';
import { usePoolsState } from 'hooks/usePoolsState';
import { useWatchlistPools } from 'hooks/useWatchlistPools';

import { Separator } from 'components/Separator/Separator';
import Headline from 'components/Headline';

import PoolTable from './PoolsTable/PoolsTable';

import style from './pools.module.css';

export default function PoolsView() {
  useFetchPools();
  const { poolsData } = usePoolsState();
  const watchlistData = useWatchlistPools();

  return (
    <main className={style.container}>
      <Headline>Watchlist pools:</Headline>
      <PoolTable poolDatas={watchlistData} />
      <Separator />
      <Headline>All pools:</Headline>
      <PoolTable poolDatas={poolsData} />
    </main>
  );
}
