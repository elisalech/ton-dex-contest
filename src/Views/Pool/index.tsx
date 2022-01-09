import { useFetchPools } from 'hooks/useFetchPools';
import { usePoolState } from 'hooks/usePoolState';

import PageLoadingView from 'components/PageLoadingView';
import Headline from 'components/Headline';

import PoolStats from './PoolStats';

import styles from './pool.module.css';

export default function PoolView() {
  useFetchPools();
  const { isLoading, data } = usePoolState();

  return (
    <main className={styles.container}>
      {isLoading ? (
        <PageLoadingView />
      ) : data ? (
        <PoolStats data={data} />
      ) : (
        <Headline>Pool not found</Headline>
      )}
    </main>
  );
}
