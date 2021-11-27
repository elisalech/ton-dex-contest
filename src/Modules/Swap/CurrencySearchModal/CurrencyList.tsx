import { CSSProperties, MutableRefObject, useCallback } from 'react';
import { FixedSizeList } from 'react-window';

import { Currency } from 'types';

import classnames from 'libs/classnames';

import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import Text from 'components/Text';

import styles from './search_modal.module.css';
import IStar from 'components/Icons/IStar';
import { Column, Row } from 'components/Layout';

interface CurrencyRowProps {
  currency: Currency;
  onSelect: () => void;
  isSelected: boolean;
  otherSelected?: boolean;
  style: CSSProperties;
}

function CurrencyRow({
  currency,
  onSelect,
  isSelected,
  // otherSelected,
  style,
}: CurrencyRowProps) {
  // const { account } = useActiveWeb3React();
  // const key = currencyKey(currency);
  // const selectedTokenList = useCombinedActiveList();
  // const isOnSelectedList = isTokenOnList(selectedTokenList, currency);
  // const customAdded = useIsUserAddedToken(currency);
  // const balance = useCurrencyBalance(account ?? undefined, currency);

  const classes = classnames(styles['currency-row'], {
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
          <Text>{currency.name}</Text>
          <Text>
            {currency.symbol}
            {/* {!isOnSelectedList && customAdded && 'Added by user •'}{' '}
          {currency.name} */}
          </Text>
        </Column>
      </Row>
      <Row>
        <Text>0.0</Text>
        <IStar selected={false} />
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
        console.log('SELECT', currency);
        onCurrencySelect(currency);
      };

      return (
        <CurrencyRow
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
