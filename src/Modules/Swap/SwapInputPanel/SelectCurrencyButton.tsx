import classnames from 'libs/classnames';

import { Currency } from 'types';

import { Button } from 'components/Button/Button';
import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import IShevronDown from 'components/Icons/IShevronDown';
import Text from 'components/Text';

import styles from './styles.module.css';

interface SelectCurrencyButtonProps {
  onClick: () => void;
  token?: Currency;
}

export function SelectCurrencyButton({
  token,
  onClick,
}: SelectCurrencyButtonProps) {
  const classes = classnames(styles['select-currency__wrap'], {
    [`${styles['select-currency__empty']}`]: !token,
  });

  return (
    <Button onClick={onClick} variant="text" className={classes}>
      {token && <CurrencyLogo currency={token} />}
      <Text>{token ? 'TONCOIN    ' : 'Select a currency    '}</Text>
      {'  '}
      <IShevronDown />
    </Button>
  );
}
