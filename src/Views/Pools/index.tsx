import { useFetchPools } from 'hooks/useFetchPools';
import { usePoolsState } from 'hooks/usePoolsState';

import Headline from 'components/Headline';

import PoolTable from './PoolsTable/PoolsTable';

import style from './pools.module.css';

export default function PoolsModule() {
  useFetchPools();
  const { poolsData } = usePoolsState();

  return (
    <main className={style.container}>
      <Headline>All pools</Headline>
      <PoolTable poolDatas={poolsData} />
    </main>
  );
}
