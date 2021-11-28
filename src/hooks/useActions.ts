import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

import { useAppDispatch } from './useAppDispatch';

export function useActions<T>(actions: T[], dependencies = []) {
  const dispatch = useAppDispatch();

  return useMemo(
    // @ts-ignore
    () => actions.map(a => bindActionCreators(a, dispatch)),
    [dispatch, ...dependencies],
  );
}
