import { Link } from 'react-router-dom';
import { useMemo } from 'react';

import { PoolData } from 'types';
import { AppRoutes } from 'Pages/types';

import { Row } from 'components/Layout';
import { DoubleCurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import Headline from 'components/Headline';
import IStar from 'components/Icons/IStar';

import styles from './pool_stats.module.css';
import Text from 'components/Text';
import { Button } from 'components/Button/Button';
import StatsCard from 'components/StatsCard';

interface PoolStatsProps {
  data: PoolData;
}

export default function PoolStats({ data }: PoolStatsProps) {
  const title = `${data.token0.symbol} / ${data.token1.symbol}`;

  const statsData = useMemo(
    () => [
      {
        label: 'Liquidity',
        value: data.reserveUSD,
      },
      {
        label: 'Volume 24h',
        value: data.volumeUSD24h,
      },
      {
        label: 'APY',
        value: data.apy,
      },
    ],
    [data],
  );

  return (
    <section>
      <Row className={styles.header_section}>
        <Row>
          <DoubleCurrencyLogo
            className={styles.logo_img}
            address0={data.token0.address}
            address1={data.token1.address}
          />
          <Headline>{title}</Headline>
        </Row>
        <IStar width="34" height="34" />
      </Row>
      <Row>
        <StatsCard statsData={statsData} />
        <Link to={`${AppRoutes.CREATE_LIQUIDITY}?provide=true`}>
          <Button variant="outline">Provide Liquidity</Button>
        </Link>
      </Row>
      <section className={styles.history_section}>
        <Headline>Transactions history:</Headline>
        <Text color="gray" weight="extraBold">
          No transactions yet...
        </Text>
      </section>
    </section>
  );
}
