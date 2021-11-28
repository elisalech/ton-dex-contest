import classnames from 'libs/classnames';
import { FC, ReactNode } from 'react';

import styles from './card.module.css';

interface CardProps {
  footerComponent?: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  footerComponent,
}) => {
  return (
    <div className={classnames(styles.container, className)}>
      {children}
      {footerComponent && (
        <div className={styles.footer}>{footerComponent}</div>
      )}
    </div>
  );
};
