import { useFetchPools } from 'hooks/useFetchPools';
import { usePoolsState } from 'hooks/usePoolsState';
import { useWatchlistPools } from 'hooks/useWatchlistPools';

import Headline from 'components/Headline';

import PoolsTable from './PoolsTable/PoolsTable';

import style from './pools.module.css';

export default function PoolsView() {
  useFetchPools();
  const { poolsData } = usePoolsState();
  const watchlistData = useWatchlistPools();

  return (
    <main className={style.container}>
      <section className={style.section}>
        <Headline className={style.title}>Watchlist pools:</Headline>
        <PoolsTable poolDatas={watchlistData} />
      </section>
      <section className={style.section}>
        <Headline className={style.title}>All pools:</Headline>
        <PoolsTable poolDatas={poolsData} />
      </section>
    </main>
  );
}
