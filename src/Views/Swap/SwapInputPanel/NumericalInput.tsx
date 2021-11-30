import { ChangeEvent, memo, useCallback } from 'react';

import styles from './styles.module.css';

const inputRegex = RegExp('^[0-9]*.?[0-9]*$');

export const NumericalInputBase = ({
  value,
  onChange,
  placeholder,
  ...rest
}: {
  value: string | number;
  onChange: (input: string) => void;
  placeholder?: string;
  error?: boolean;
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value.replace(/,/g, '.');

      if (nextValue === '' || inputRegex.test(nextValue)) {
        onChange(nextValue);
      }
    },
    [onChange],
  );

  return (
    <input
      {...rest}
      value={value}
      onChange={handleChange}
      inputMode="decimal"
      title="Token Amount"
      autoComplete="off"
      autoCorrect="off"
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder={placeholder || '0.0'}
      minLength={1}
      maxLength={79}
      spellCheck="false"
      className={styles['num-input']}
    />
  );
};

export default memo(NumericalInputBase);
