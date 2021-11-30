import React, { useMemo } from 'react';

import { Button } from 'components/Button/Button';
import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import IArrowLeft from 'components/Icons/IArrowLeft';
import IArrowRight from 'components/Icons/IArrowRight';
import { Column, Row } from 'components/Layout';
import Text from 'components/Text';
import { useSortTable } from 'hooks/useSortTable';

// import { Link } from 'react-router-dom';
// import { formatAmount } from 'views/Info/utils/formatInfoNumbers'
// import { Button, TableWrapper, PageButtons, Arrow, Break } from './shared'
import { PoolData } from 'types';

import styles from './pool_table.module.css';
import truncateHash from 'utils/truncateHash';
import IExternal from 'components/Icons/IExternal';
import formatUsdAmount from 'utils/formatUsdAmount';

const LoadingRow: React.FC = () => (
  <div className={styles.grid}>
    {/* <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton /> */}
  </div>
);

const TableLoader: React.FC = () => (
  <>
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
  </>
);

const DataRow = ({ poolData }: { poolData: PoolData }) => {
  return (
    <div className={styles.grid}>
      <a href={`https://ton.sh/address/${poolData.pair}`} target="_blank">
        <Row>
          <IExternal width="24" height="24" />
          <Text>{truncateHash(poolData.pair)}</Text>
        </Row>
      </a>
      <Row justifyContent="start">
        <CurrencyLogo address={poolData.token0.address} />
        <CurrencyLogo address={poolData.token1.address} />
        <Text>
          {poolData.token0.symbol}/{poolData.token1.symbol}
        </Text>
      </Row>
      <Text>{formatUsdAmount(poolData.reserveUSD)}</Text>
      <Text>{formatUsdAmount(poolData.volumeUSD24h)}</Text>
      <Text>{poolData.apy}</Text>
    </div>
  );
};

enum SortFields {
  apy = 'apy',
  reserveUSD = 'reserveUSD',
  volumeUSD24h = 'volumeUSD24h',
}

interface PoolTableProps {
  poolDatas: PoolData[];
  loading?: boolean;
}

const PoolTable: React.FC<PoolTableProps> = ({ poolDatas, loading }) => {
  const {
    handleSort,
    getArrow,
    sortDirection,
    sortField,
    sortedData,
    page,
    itemsPerPage,
    maxPage,
    setItemsPerPage,
    setPage,
  } = useSortTable<PoolData, SortFields>({
    data: poolDatas,
    initialSortField: SortFields.reserveUSD,
  });

  const headerFieldsData = useMemo(
    () => [
      {
        lable: 'Liquidity',
        handler: () => handleSort(SortFields.reserveUSD),
        arrow: getArrow(SortFields.reserveUSD),
      },
      {
        lable: 'Volume 24h',
        handler: () => handleSort(SortFields.volumeUSD24h),
        arrow: getArrow(SortFields.volumeUSD24h),
      },
      {
        lable: 'APY',
        handler: () => handleSort(SortFields.apy),
        arrow: getArrow(SortFields.apy),
      },
    ],
    [sortDirection, sortField],
  );

  return (
    <Column>
      <div className={styles.grid}>
        <Text weight="bold">Pool</Text>
        <div />
        {headerFieldsData.map(item => (
          <Button
            variant="text"
            key={item.lable}
            onClick={item.handler}>{`${item.lable} ${item.arrow}`}</Button>
        ))}
        <div />
      </div>
      {/* <Break /> */}
      {sortedData.length > 0 ? (
        <>
          {sortedData.map(poolData => {
            if (poolData) {
              return <DataRow key={poolData.pair} poolData={poolData} />;
            }
            return null;
          })}
          {loading && <LoadingRow />}
          <Row>
            <Button
              variant="text"
              disabled={page === 1}
              onClick={() => {
                setPage(page === 1 ? page : page - 1);
              }}>
              <IArrowLeft />
            </Button>

            <Text>
              Page {page} of {maxPage}
            </Text>

            <Button
              variant="text"
              disabled={page === maxPage}
              onClick={() => {
                setPage(page === maxPage ? page : page + 1);
              }}>
              <IArrowRight />
            </Button>
            <select
              value={itemsPerPage}
              onChange={e => {
                setItemsPerPage(Number(e.target.value));
              }}>
              {[10, 20, 30, 40, 50, 0].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize === 0 ? 'All' : pageSize}
                </option>
              ))}
            </select>
          </Row>
        </>
      ) : (
        <>
          <TableLoader />
        </>
      )}
    </Column>
  );
};

export default PoolTable;
