import { Link } from 'react-router-dom';

import { PoolData } from 'types';

import truncateHash from 'utils/truncateHash';
import formatUsdAmount from 'utils/formatUsdAmount';

import Text from 'components/Text';
import { Row } from 'components/Layout';
import { DoubleCurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';

import styles from './pool_table.module.css';
import classnames from 'libs/classnames';
import { AppRoutes } from 'Pages/types';

export default function PoolsTableRow({ poolData }: { poolData: PoolData }) {
  return (
    <Link
      to={`${AppRoutes.POOL}/${poolData.pair}`}
      className={classnames(styles.grid, styles.row)}>
      <Text color="blue">{truncateHash(poolData.pair)}</Text>
      <Row justifyContent="start">
        <DoubleCurrencyLogo
          address0={poolData.token0.address}
          address1={poolData.token1.address}
        />

        <Text color="black">
          {poolData.token0.symbol}/{poolData.token1.symbol}
        </Text>
      </Row>
      <Text color="gray" size="small">
        {formatUsdAmount(poolData.reserveUSD, true)} $
      </Text>
      <Text color="gray" size="small">
        {formatUsdAmount(poolData.volumeUSD24h, true)} $
      </Text>
      <Text color="gray" size="small">
        {poolData.apy}%
      </Text>
    </Link>
  );
}
