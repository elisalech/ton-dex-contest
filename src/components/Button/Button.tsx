import { FC, isValidElement, ReactNode } from 'react';

import classnames from 'libs/classnames';

import styles from './styles.module.css';

type ButtonVariants = 'primary' | 'text';

interface ButtonProps {
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  variant = 'primary',
  ...props
}) => {
  const classes = classnames(styles.common, styles[variant], props.className);

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
