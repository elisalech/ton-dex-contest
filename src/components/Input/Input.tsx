import { InputHTMLAttributes, memo } from 'react';

import classnames from 'libs/classnames';

import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  autofocus?: boolean;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  className,
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
      className={classnames(styles.input, className)}
    />
  );
};

export default memo(Input);
