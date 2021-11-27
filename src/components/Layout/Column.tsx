import { CSSProperties, FC, HTMLAttributes } from 'react';

import classnames from 'libs/classnames';

import styles from './layout.module.css';

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
}

export const Column: FC<ColumnProps> = ({
  children,
  style = {},
  justifyContent = 'space-between',
  alignItems = 'flex-start',
  className,
  ...props
}) => (
  <div
    style={{ ...style, justifyContent, alignItems }}
    className={classnames(styles.column, className)}
    {...props}>
    {children}
  </div>
);
