import { SVGProps } from 'react';

import classnames from 'libs/classnames';

import styles from './icons.module.css';

export default function ILoading({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classnames(styles.spinner, className)}
      {...props}>
      <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10" />
    </svg>
  );
}
