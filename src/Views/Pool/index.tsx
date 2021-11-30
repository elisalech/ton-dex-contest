import { useFetchPools } from 'hooks/useFetchPools';
import { usePoolState } from 'hooks/usePoolState';

import Headline from 'components/Headline';
import ILoading from 'components/Icons/ILoading';

import PoolStats from './PoolStats';

import styles from './pool.module.css';

export default function PoolView() {
  useFetchPools();
  const { isLoading, data } = usePoolState();

  return (
    <main className={styles.container}>
      {isLoading ? (
        <ILoading />
      ) : data ? (
        <PoolStats data={data} />
      ) : (
        <Headline>Pool not found</Headline>
      )}
    </main>
  );
}
