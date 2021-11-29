import { usePoolsState } from 'hooks/usePoolsState';

import PoolTable from './PoolsTable/PoolsTable';

export default function PoolsModule() {
  const { poolsData } = usePoolsState();

  return <PoolTable poolDatas={poolsData} />;
}
