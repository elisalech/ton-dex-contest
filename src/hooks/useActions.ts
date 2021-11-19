import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export function useActions(actions: any[], dependencies = []) {
  const dispatch = useDispatch();

  return useMemo(
    () => actions.map(a => bindActionCreators(a, dispatch)),
    [dispatch, ...dependencies],
  );
}
