import { InputHTMLAttributes, memo } from 'react';

import classnames from 'libs/classnames';

import styles from './input.module.css';
import Text from 'components/Text';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  autofocus?: boolean;
  label?: string;
}

export const Input = ({
  value,
  onChange,
  label,
  placeholder,
  className,
  ...rest
}: InputProps) => {
  return (
    <>
      {label && (
        <label>
          <Text>{label}</Text>
        </label>
      )}
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
        className={classnames(styles.input, className)}
      />
    </>
  );
};

export default memo(Input);
