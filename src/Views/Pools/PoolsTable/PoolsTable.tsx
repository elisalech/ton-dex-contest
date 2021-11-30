import React, { useMemo } from 'react';

import { useSortTable } from 'hooks/useSortTable';

import { PoolData } from 'types';

import Text from 'components/Text';
import { Button } from 'components/Button/Button';
import IArrowLeft from 'components/Icons/IArrowLeft';
import IArrowRight from 'components/Icons/IArrowRight';
import { Column, Row } from 'components/Layout';
import ILoading from 'components/Icons/ILoading';

import PoolsTableRow from './PoolsTableRow';

import styles from './pool_table.module.css';

const ITEMS_PER_PAGE_OPTIONS = [10, 20, 30, 40, 50, 0];

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
        label: 'Liquidity',
        handler: () => handleSort(SortFields.reserveUSD),
        arrow: getArrow(SortFields.reserveUSD),
      },
      {
        label: 'Volume 24h',
        handler: () => handleSort(SortFields.volumeUSD24h),
        arrow: getArrow(SortFields.volumeUSD24h),
      },
      {
        label: 'APY',
        handler: () => handleSort(SortFields.apy),
        arrow: getArrow(SortFields.apy),
      },
    ],
    [sortDirection, sortField],
  );

  return (
    <Column>
      {sortedData.length > 0 && (
        <div className={styles.grid}>
          <Text weight="bold">Pool</Text>
          <div />
          {headerFieldsData.map(item => (
            <Button
              variant="text"
              key={item.label}
              onClick={item.handler}>{`${item.label} ${item.arrow}`}</Button>
          ))}
          <div />
        </div>
      )}
      {loading ? (
        <Text color="blue" size="big">
          <ILoading />
        </Text>
      ) : sortedData.length > 0 ? (
        <>
          {sortedData.map(poolData =>
            poolData ? (
              <PoolsTableRow key={poolData.pair} poolData={poolData} />
            ) : null,
          )}
          <Row justifyContent="flex-end" className={styles.controls}>
            <select
              className={styles.select}
              value={itemsPerPage}
              onChange={e => {
                setItemsPerPage(Number(e.target.value));
              }}>
              {ITEMS_PER_PAGE_OPTIONS.map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize === 0 ? 'All' : pageSize}
                </option>
              ))}
            </select>
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
          </Row>
        </>
      ) : (
        <Text size="big" color="gray">
          Pools not found
        </Text>
      )}
    </Column>
  );
};

export default PoolTable;
