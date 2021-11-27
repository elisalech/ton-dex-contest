import { SVGProps } from 'react';

import classnames from 'libs/classnames';

import styles from './icons.module.css';

interface IStarProps extends SVGProps<SVGSVGElement> {
  selected?: boolean;
}

export default function IStar({ selected, className, ...rest }: IStarProps) {
  const classes = classnames({ [`${styles.selected}`]: selected }, className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes}
      {...rest}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
