import { Card } from 'components/Card/Card';
import classnames from 'libs/classnames';

import PoolStatsRow from 'Views/Pool/PoolStats/PoolStatsRow';

import styles from './stats_card.module.css';

export default function StatsCard({
  statsData,
  className,
}: {
  className?: string;
  statsData: {
    label: string;
    value: string;
  }[];
}) {
  return (
    <Card className={classnames(styles.stats_card, className)}>
      {statsData.map(rowData => (
        <PoolStatsRow key={rowData.label} {...rowData} />
      ))}
    </Card>
  );
}
