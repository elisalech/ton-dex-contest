import { CSSProperties, ElementType, FC, HTMLAttributes } from 'react';

import classnames from 'libs/classnames';

import styles from './layout.module.css';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  as?: ElementType;
  fullWidth?: boolean;
}

export const Row: FC<RowProps> = ({
  children,
  style = {},
  fullWidth,
  justifyContent = 'space-between',
  alignItems = 'center',
  className,
  as: Tag = 'div',
  ...props
}) => (
  <Tag
    style={{
      justifyContent,
      alignItems,
      width: fullWidth ? '100%' : undefined,
      ...style,
    }}
    className={classnames(styles.row, className)}
    {...props}>
    {children}
  </Tag>
);
