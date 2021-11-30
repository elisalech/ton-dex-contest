import { FC } from 'react';

import classnames from 'libs/classnames';

import styles from './styles.module.css';

interface HeadlineProps {
  className?: string;
}

const Headline: FC<HeadlineProps> = props => {
  const classes = classnames(styles.headline, styles.h1, props.className);

  return <h2 {...props} className={classes} />;
};

export default Headline;
