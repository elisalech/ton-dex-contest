import { removeWatchlistToken } from 'store/user/actions';

import { useFavoriteCurrencies } from 'hooks/useFavoriteCurrencies';

import { Row } from 'components/Layout';
import Text from 'components/Text';
import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import { useAppDispatch } from 'hooks/useAppDispatch';

import styles from './search_modal.module.css';
import IClose from 'components/Icons/IClose';
import { Currency } from 'types';

interface FavouriteListProps {
  selectFieldCurrency: (currency: Currency) => void;
}

export default function FavouriteList({
  selectFieldCurrency,
}: FavouriteListProps) {
  const { favoriteCurrenciesList } = useFavoriteCurrencies();
  const dispatch = useAppDispatch();

  return (
    <Row justifyContent="initial" className={styles.fav_column}>
      {favoriteCurrenciesList.map(item => (
        <Row
          onClick={() => selectFieldCurrency(item!)}
          className={styles.fav_token_wrap}
          key={item?.address}>
          <CurrencyLogo withMarginRight currency={item} />
          <Text>{item?.symbol}</Text>
          <IClose
            className={styles.fav_close}
            onClick={e => {
              e.stopPropagation();
              dispatch(removeWatchlistToken(item!));
            }}
          />
        </Row>
      ))}
    </Row>
  );
}
