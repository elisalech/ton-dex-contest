import { useAppSelector } from './useAppSelector';

export const useFavoriteCurrencies = () => {
  const watchlistTokens = useAppSelector(store => store.user.watchlistTokens);

  return {
    favoriteCurrenciesList: Object.values(watchlistTokens),
    favoriteCurrenciesMap: watchlistTokens,
  };
};
