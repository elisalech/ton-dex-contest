import { FC } from 'react';

import classnames from 'libs/classnames';

import styles from './card.module.css';

interface CardProps {
  className?: string;
  withPadding?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  withPadding = true,
}) => {
  return (
    <div
      className={classnames(
        styles.container,
        withPadding && styles.padding,
        className,
      )}>
      {children}
    </div>
  );
};
