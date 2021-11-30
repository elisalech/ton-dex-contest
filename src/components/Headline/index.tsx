import { FC } from 'react';

import classnames from 'libs/classnames';

import styles from './styles.module.css';

type HeadlineSizes = 'medium' | 'big';

interface HeadlineProps {
  className?: string;
  size?: HeadlineSizes;
}

const Headline: FC<HeadlineProps> = ({
  size = 'medium',
  className,
  ...props
}) => {
  const classes = classnames(styles.headline, styles[size], className);

  return <h2 {...props} className={classes} />;
};

export default Headline;
