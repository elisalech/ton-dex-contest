import Text from 'components/Text';

import styles from './pool_stats.module.css';

interface PoolStatsRowProps {
  label: string;
  value: string;
}

export default function PoolStatsRow({ label, value }: PoolStatsRowProps) {
  return (
    <div className={styles.stat_row}>
      <Text weight="extraBold">{label}:</Text>
      <Text color="gray">{value}</Text>
    </div>
  );
}
