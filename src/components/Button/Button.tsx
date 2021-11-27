import { FC, isValidElement, ReactNode, ButtonHTMLAttributes } from 'react';

import classnames from 'libs/classnames';

import styles from './styles.module.css';

type ButtonVariants = 'primary' | 'text';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  className,
  variant = 'primary',
  ...props
}) => {
  const classes = classnames(styles.common, styles[variant], className);

  return (
    <button {...props} className={classes}>
      {isValidElement(startIcon) && (
        <div className={styles['start-wrap']}>{startIcon}</div>
      )}
      {children}
      {isValidElement(endIcon) && (
        <div className={styles['end-wrap']}>{endIcon}</div>
      )}
    </button>
  );
};
