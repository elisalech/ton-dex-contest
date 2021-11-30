import { Link } from 'react-router-dom';
import { AppRoutes } from 'Pages/types';

import { useFetchPools } from 'hooks/useFetchPools';
import { usePoolsState } from 'hooks/usePoolsState';
import { useWatchlistPools } from 'hooks/useWatchlistPools';

import { Row } from 'components/Layout';
import Headline from 'components/Headline';

import PoolsTable from './PoolsTable/PoolsTable';

import style from './pools.module.css';
import { Button } from 'components/Button/Button';

export default function PoolsView() {
  useFetchPools();
  const { poolsData } = usePoolsState();
  const watchlistData = useWatchlistPools();

  return (
    <main className={style.container}>
      <Row className={style.title_wrap}>
        <Headline size="big">Liquidity Pools</Headline>
        <Link to={AppRoutes.CREATE_LIQUIDITY}>
          <Button variant="outline">Create liquidity</Button>
        </Link>
      </Row>
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
