import { forwardRef, InputHTMLAttributes, useEffect, useRef } from 'react';

import useCombinedRefs from 'hooks/useCombineRefs';

import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  autofocus?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ autofocus, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const targetRef = useCombinedRefs<HTMLInputElement>(inputRef, ref);

    useEffect(() => {
      if (autofocus) {
        inputRef.current?.focus();
      }
    }, []);
    return <input {...props} className={styles.input} ref={targetRef} />;
  },
);

export default Input;
