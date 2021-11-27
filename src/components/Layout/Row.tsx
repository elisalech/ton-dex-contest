import { CSSProperties, FC, HTMLAttributes } from 'react';

import classnames from 'libs/classnames';

import styles from './layout.module.css';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
}

export const Row: FC<RowProps> = ({
  children,
  style = {},
  justifyContent = 'space-between',
  alignItems = 'center',
  className,
  ...props
}) => (
  <div
    style={{ ...style, justifyContent, alignItems }}
    className={classnames(styles.row, className)}
    {...props}>
    {children}
  </div>
);
