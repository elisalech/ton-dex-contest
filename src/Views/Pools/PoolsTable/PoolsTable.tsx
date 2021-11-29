import { Button } from 'components/Button/Button';
import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import IArrowLeft from 'components/Icons/IArrowLeft';
import IArrowRight from 'components/Icons/IArrowRight';
import { Column, Row } from 'components/Layout';
import Text from 'components/Text';
import React, { useCallback, useState, useMemo, useEffect } from 'react';

import { Link } from 'react-router-dom';
// import { formatAmount } from 'views/Info/utils/formatInfoNumbers'
// import { Button, TableWrapper, PageButtons, Arrow, Break } from './shared'
import { PoolData } from 'types';

import styles from './pool_table.module.css';

const SORT_FIELD = {
  volumeUSD: 'volumeUSD',
  tvlUSD: 'tvlUSD',
  volumeUSDWeek: 'volumeUSDWeek',
  lpFees24h: 'lpFees24h',
  lpApr7d: 'lpApr7d',
};

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

const DataRow = ({
  poolData,
  index,
}: {
  poolData: PoolData;
  index: number;
}) => {
  return (
    <Link to={`/info/pool/${poolData.pair}`}>
      <div className={styles.grid}>
        <Text>{index + 1}</Text>
        <Row>
          <CurrencyLogo address={poolData.token0.address} />
          <CurrencyLogo address={poolData.token1.address} />
          <Text>
            {poolData.token0.symbol}/{poolData.token1.symbol}
          </Text>
        </Row>
        <Text>{poolData.volumeUSD}</Text>
        <Text>{poolData.volumeUSD24h}</Text>
        {/* <Text>{poolData.lpFees24h}</Text>
        <Text>{poolData.lpApr7d}%</Text>
        <Text>{poolData.liquidityUSD}</Text> */}
        <Text>{poolData.lpExtraFeeInToken0}</Text>
        <Text>{poolData.apy}%</Text>
        <Text>{poolData.reserveUSD}</Text>
      </div>
    </Link>
  );
};

interface PoolTableProps {
  poolDatas: PoolData[];
  loading?: boolean; // If true shows indication that SOME pools are loading, but the ones already fetched will be shown
}

const PoolTable: React.FC<PoolTableProps> = ({ poolDatas, loading }) => {
  // for sorting
  const [sortField, setSortField] = useState(SORT_FIELD.volumeUSD);
  const [sortDirection, setSortDirection] = useState<boolean>(true);

  // pagination
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    let extraPages = 1;
    if (poolDatas?.length % itemsPerPage === 0) {
      extraPages = 0;
    }
    setMaxPage(Math.floor(poolDatas.length / itemsPerPage) + extraPages);
  }, [poolDatas]);

  const sortedPools = useMemo(() => {
    return poolDatas
      ? poolDatas
          .sort((a, b) => {
            if (a && b) {
              return a[sortField as keyof PoolData] >
                b[sortField as keyof PoolData]
                ? (sortDirection ? -1 : 1) * 1
                : (sortDirection ? -1 : 1) * -1;
            }
            return -1;
          })
          .slice(itemsPerPage * (page - 1), page * itemsPerPage)
      : [];
  }, [page, poolDatas, sortDirection, sortField]);

  const handleSort = useCallback(
    (newField: string) => {
      setSortField(newField);
      setSortDirection(sortField !== newField ? true : !sortDirection);
    },
    [sortDirection, sortField],
  );

  const arrow = useCallback(
    (field: string) => {
      const directionArrow = !sortDirection ? '↑' : '↓';
      return sortField === field ? directionArrow : '';
    },
    [sortDirection, sortField],
  );

  return (
    <Column>
      <div className={styles.grid}>
        <Text color="secondary">#</Text>
        <Text color="secondary">Pool</Text>
        <Button
          color="secondary"
          onClick={() => handleSort(SORT_FIELD.volumeUSD)}>
          Volume 24H {arrow(SORT_FIELD.volumeUSD)}
        </Button>
        <Button
          color="secondary"
          onClick={() => handleSort(SORT_FIELD.volumeUSDWeek)}>
          Volume 7D {arrow(SORT_FIELD.volumeUSDWeek)}
        </Button>
        <Button
          color="secondary"
          onClick={() => handleSort(SORT_FIELD.lpFees24h)}>
          LP reward fees 24H {arrow(SORT_FIELD.lpFees24h)}
        </Button>
        <Button
          color="secondary"
          onClick={() => handleSort(SORT_FIELD.lpApr7d)}>
          LP reward APR {arrow(SORT_FIELD.lpApr7d)}
        </Button>
        <Button color="secondary" onClick={() => handleSort(SORT_FIELD.tvlUSD)}>
          Liquidity {arrow(SORT_FIELD.tvlUSD)}
        </Button>
      </div>
      {/* <Break /> */}
      {sortedPools.length > 0 ? (
        <>
          {sortedPools.map((poolData, i) => {
            if (poolData) {
              return (
                <React.Fragment key={poolData.pair}>
                  <DataRow
                    index={(page - 1) * itemsPerPage + i}
                    poolData={poolData}
                  />
                  {/* <Break /> */}
                </React.Fragment>
              );
            }
            return null;
          })}
          {loading && <LoadingRow />}
          <Row>
            <div
              onClick={() => {
                setPage(page === 1 ? page : page - 1);
              }}>
              <IArrowLeft
              // color={page === 1 ? 'textDisabled' : 'primary'}
              />
            </div>

            <Text>
              Page {page} of {maxPage}
            </Text>

            <div
              onClick={() => {
                setPage(page === maxPage ? page : page + 1);
              }}>
              <IArrowRight
              // color={page === maxPage ? 'textDisabled' : 'primary'}
              />
            </div>
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
          {/* spacer */}
          {/* <Box /> */}
        </>
      )}
    </Column>
  );
};

export default PoolTable;
