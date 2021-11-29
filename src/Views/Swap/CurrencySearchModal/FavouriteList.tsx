import { removeWatchlistToken } from 'store/user/actions';

import { useFavoriteCurrencies } from 'hooks/useFavoriteCurrencies';

import Text from 'components/Text';
import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import { useAppDispatch } from 'hooks/useAppDispatch';

export default function FavouriteList() {
  const { favoriteCurrenciesList } = useFavoriteCurrencies();
  const dispatch = useAppDispatch();

  return (
    <div>
      {favoriteCurrenciesList.map(item => (
        <div
          key={item?.address}
          onClick={() => dispatch(removeWatchlistToken(item!))}>
          <CurrencyLogo currency={item} />
          <Text>{item?.symbol}</Text>
        </div>
      ))}
    </div>
  );
}
