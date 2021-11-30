import { useQueryParams } from './useQueryParams';

export const useCreateLiquidityMode = () => {
  const query = useQueryParams();

  const isProvideMode = JSON.parse(query.get('provide') ?? 'false');

  return { isProvideMode };
};
