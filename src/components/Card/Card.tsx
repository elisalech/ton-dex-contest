import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

interface CardProps {
  footerComponent?: ReactNode;
}

export const Card: FC<CardProps> = ({ children, footerComponent }) => {
  return (
    <div className={styles.container}>
      {children}
      {footerComponent && (
        <div className={styles.footer}>{footerComponent}</div>
      )}
    </div>
  );
};
