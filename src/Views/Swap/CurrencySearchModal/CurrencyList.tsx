import { CSSProperties, MutableRefObject, useCallback } from 'react';
import { FixedSizeList } from 'react-window';

import { Currency } from 'types';

import classnames from 'libs/classnames';

import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import Text from 'components/Text';

import styles from './search_modal.module.css';
import IStar from 'components/Icons/IStar';
import { Column, Row } from 'components/Layout';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useFavoriteCurrencies } from 'hooks/useFavoriteCurrencies';
import { addWatchlistToken, removeWatchlistToken } from 'store/user/actions';
import { useTokenBalances } from 'hooks/useTokenBalances';
import { useSwapState } from 'hooks/useSwapState';

interface CurrencyListProps {
  selectedCurrency?: Currency | null;
  onCurrencySelect: (currency: Currency) => void;
  currencies: Currency[];
  height: number;
  fixedListRef: MutableRefObject<FixedSizeList>;
}

export default function CurrencyList({
  height = 400,
  fixedListRef,
  onCurrencySelect,
  currencies,
}: CurrencyListProps) {
  const dispatch = useAppDispatch();
  const balances = useTokenBalances();
  const { tokenFrom, tokenTo } = useSwapState();
  const { favoriteCurrenciesMap } = useFavoriteCurrencies();

  const itemKey = useCallback(
    (index: number, data: Currency[]) => data[index].address,
    [],
  );

  const toggleFavourite = useCallback(
    (currency: Currency, isFavourite: boolean) => {
      const handlerAction = isFavourite
        ? removeWatchlistToken
        : addWatchlistToken;
      dispatch(handlerAction(currency));
    },
    [],
  );

  const handleSelect = (currency: Currency) => {
    onCurrencySelect(currency);
  };

  const RenderListRow = useCallback(
    ({
      data,
      index,
      style,
    }: {
      index: number;
      data: Currency[];
      style: CSSProperties;
    }) => {
      const currency = data[index];

      const balance = balances[currency.address];

      const isFavourite = !!favoriteCurrenciesMap[currency.address];
      const isSelected =
        tokenFrom?.address === currency.address ||
        tokenTo?.address === currency.address;

      const classes = classnames(styles.row, {
        [`${styles['row-selected']}`]: isSelected,
      });

      return (
        <Row
          style={style}
          onClick={() => (isSelected ? null : handleSelect(currency))}
          className={classes}>
          <Row className={styles['row-left']}>
            <CurrencyLogo withMarginRight currency={currency} />
            <Column className={styles['row-left-name']}>
              <Text color="secondary" weight="bold">
                {currency.name}
              </Text>
              <Text size="small" color="gray">
                {currency.symbol}
              </Text>
            </Column>
          </Row>
          <Row>
            <Text color="primary">{balance?.amount}</Text>
            <IStar
              selected={isFavourite}
              onClick={e => {
                e.stopPropagation();
                toggleFavourite(currency, isFavourite);
              }}
            />
          </Row>
        </Row>
      );
    },
    [],
  );

  return (
    <FixedSizeList
      height={height}
      ref={fixedListRef}
      width="100%"
      itemData={currencies}
      itemCount={currencies.length}
      itemSize={56}
      itemKey={itemKey}>
      {RenderListRow}
    </FixedSizeList>
  );
}
