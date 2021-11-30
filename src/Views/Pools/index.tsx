import { useFetchPools } from 'hooks/useFetchPools';
import { usePoolsState } from 'hooks/usePoolsState';

import PoolTable from './PoolsTable/PoolsTable';

export default function PoolsModule() {
  useFetchPools();
  const { poolsData } = usePoolsState();

  return <PoolTable poolDatas={poolsData} />;
}
