import { FC, isValidElement, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

enum ButtonVariants {
  primary = 'primary',
}

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
  variant = ButtonVariants.primary,
  ...props
}) => {
  const classes = classNames(styles.common, styles[variant], props.className);

  return (
    <button className={classes} {...props}>
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
