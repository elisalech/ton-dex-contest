import { HTMLAttributes } from 'react';

import classnames from 'libs/classnames';

import styles from './modal.module.css';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  shown?: boolean;
}

export default function Overlay({ shown, ...rest }: OverlayProps) {
  // @ts-ignore
  // rest?.onClick();
  const classes = classnames(styles.overlay, {
    [`${styles.overlay__shown}`]: shown,
  });

  return <div {...rest} className={classes} />;
}
