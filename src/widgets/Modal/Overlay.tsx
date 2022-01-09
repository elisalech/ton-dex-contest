import { HTMLAttributes } from 'react';

import styles from './modal.module.css';

export default function Overlay(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={styles.overlay} />;
}
