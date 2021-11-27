import { useRef, useEffect, MutableRefObject, LegacyRef } from 'react';

export default function useCombinedRefs<T>(
  ...refs: Array<MutableRefObject<T> | LegacyRef<T>>
) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
