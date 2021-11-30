// import { forwardRef, InputHTMLAttributes, useEffect, useRef } from 'react';

// import useCombinedRefs from 'hooks/useCombineRefs';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  autofocus?: boolean;
}

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ autofocus, ...props }, ref) => {
//     const inputRef = useRef<HTMLInputElement>(null);
//     const targetRef = useCombinedRefs<HTMLInputElement>(inputRef, ref);

//     useEffect(() => {
//       if (autofocus) {
//         inputRef.current?.focus();
//       }
//     }, []);
//     return <input {...props} className={styles.input} ref={targetRef} />;
//   },
// );

// export default Input;

import { InputHTMLAttributes, memo } from 'react';

import styles from './input.module.css';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  autofocus?: boolean;
}

export const NumericalInputBase = ({
  value,
  onChange,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <input
      {...rest}
      value={value}
      onChange={onChange}
      autoComplete="off"
      autoCorrect="off"
      type="text"
      placeholder={placeholder}
      minLength={1}
      maxLength={79}
      spellCheck="false"
      className={styles.input}
    />
  );
};

export default memo(NumericalInputBase);
