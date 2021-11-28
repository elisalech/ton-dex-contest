import { FC, ElementType } from 'react';

import classnames from 'libs/classnames';

import styles from './text.module.css';

type TextWeight = 'regular' | 'bold' | 'extraBold';
type TextSize = 'medium' | 'small' | 'big';
type TextColor =
  | 'primary'
  | 'secondary'
  | 'gray'
  | 'black'
  | 'white'
  | 'blue'
  | 'contrast';

interface IText {
  inline?: boolean;
  className?: string;
  weight?: TextWeight;
  color?: TextColor;
  size?: TextSize;
}

const Text: FC<IText> = ({
  inline = false,
  weight = 'regular',
  color = 'primary',
  size = 'medium',
  className,
  ...rest
}) => {
  const Tag: ElementType = inline ? 'span' : 'p';

  const classes = classnames(
    styles[weight],
    styles[size],
    styles[color],
    className,
  );

  return <Tag {...rest} className={classes} />;
};

export default Text;
