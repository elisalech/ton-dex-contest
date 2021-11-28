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

interface CurrencyRowProps {
  currency: Currency;
  onSelect: () => void;
  isSelected: boolean;
  otherSelected?: boolean;
  style: CSSProperties;
  toggleFavourite: (currency: Currency, isFavourite: boolean) => void;
}

function CurrencyRow({
  currency,
  onSelect,
  isSelected,
  toggleFavourite,
  // otherSelected,
  style,
}: CurrencyRowProps) {
  // const { account } = useActiveWeb3React();
  // const key = currencyKey(currency);
  // const selectedTokenList = useCombinedActiveList();
  // const isOnSelectedList = isTokenOnList(selectedTokenList, currency);
  // const customAdded = useIsUserAddedToken(currency);
  // const balance = useCurrencyBalance(account ?? undefined, currency);

  const { favoriteCurrenciesMap } = useFavoriteCurrencies();
  const isFavourite = !!favoriteCurrenciesMap[currency.address];

  const classes = classnames(styles.row, {
    [`${styles['currency-row-disabled']}`]: true,
    [`${styles['currency-row-selected']}`]: true,
  });

  return (
    <Row
      style={style}
      onClick={() => (isSelected ? null : onSelect())}
      className={classes}>
      <Row className={styles['row-left']}>
        <CurrencyLogo currency={currency} />
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
        <Text color="primary">0.0</Text>
        <IStar
          selected={isFavourite}
          onClick={() => toggleFavourite(currency, isFavourite)}
        />
      </Row>
      {/* <RowFixed style={{ justifySelf: 'flex-end' }}>
        {balance ? (
          <Balance balance={balance} />
        ) : account ? (
          <CircleLoader />
        ) : null}
      </RowFixed> */}
    </Row>
  );
}

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
  const itemKey = useCallback(
    (index: number, data: Currency[]) => data[index].address,
    [],
  );
  const dispatch = useAppDispatch();

  const toggleFavourite = useCallback(
    (currency: Currency, isFavourite: boolean) => {
      const handlerAction = isFavourite
        ? removeWatchlistToken
        : addWatchlistToken;
      dispatch(handlerAction(currency));
    },
    [],
  );

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
      const handleSelect = () => {
        onCurrencySelect(currency);
      };

      return (
        <CurrencyRow
          toggleFavourite={toggleFavourite}
          style={style}
          currency={currency}
          isSelected={false}
          onSelect={handleSelect}
          otherSelected={true}
        />
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
