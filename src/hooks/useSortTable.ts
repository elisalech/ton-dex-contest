import { useCallback, useEffect, useMemo, useState } from 'react';

export const useSortTable = <T, P extends string>({
  data,
  initialSortField,
}: {
  data: T[];
  initialSortField: P;
}) => {
  // for sorting
  const [sortField, setSortField] = useState<P>(initialSortField);
  const [sortDirection, setSortDirection] = useState<boolean>(true);

  // pagination
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    let extraPages = 1;
    if (data?.length % itemsPerPage === 0) {
      extraPages = 0;
    }
    setPage(1);
    setMaxPage(
      itemsPerPage ? Math.floor(data.length / itemsPerPage) + extraPages : 1,
    );
  }, [data, itemsPerPage]);

  const sortedData = useMemo(() => {
    return data
      ? data
          .sort((a, b) => {
            if (a && b) {
              //@ts-ignore
              return parseFloat(a[sortField as unknown as keyof T] as string) >
                //@ts-ignore
                parseFloat(b[sortField as unknown as keyof T] as string)
                ? (sortDirection ? -1 : 1) * 1
                : (sortDirection ? -1 : 1) * -1;
            }
            return -1;
          })
          .slice(
            itemsPerPage * (page - 1),
            itemsPerPage ? page * itemsPerPage : undefined,
          )
      : [];
  }, [page, data, itemsPerPage, sortDirection, sortField]);

  const handleSort = useCallback(
    (newField: P) => {
      setSortField(newField);
      setSortDirection(sortField !== newField ? true : !sortDirection);
    },
    [sortDirection, sortField],
  );

  const getArrow = useCallback(
    (field: P) => {
      const directionArrow = !sortDirection ? '↑' : '↓';
      return sortField === field ? directionArrow : '';
    },
    [sortDirection, sortField],
  );

  return {
    sortedData,
    page,
    setPage,
    maxPage,
    setMaxPage,
    itemsPerPage,
    setItemsPerPage,
    sortDirection,
    setSortDirection,
    getArrow,
    handleSort,
    sortField,
  };
};
