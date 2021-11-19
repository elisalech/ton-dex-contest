import { FC } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

interface HeadlineProps {
  className?: string;
}

const Headline: FC<HeadlineProps> = props => {
  const classes = classNames(styles.headline, styles.h1, props.className);

  return <h1 {...props} className={classes} />;
};

export default Headline;
