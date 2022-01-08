import { FC } from 'react';

import classnames from 'libs/classnames';

import styles from './skeleton.module.css';

interface SkeletonProps {
  className?: string;
}

export const SkeletonBox: FC<SkeletonProps> = ({ className }) => {
  return <div className={classnames(styles.box, className)} />;
};
