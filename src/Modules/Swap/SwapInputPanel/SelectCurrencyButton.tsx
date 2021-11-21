import classnames from 'libs/classnames';

import { Button } from 'components/Button/Button';
import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import IShevronDown from 'components/Icons/IShevronDown';
import Text from 'components/Text';

import styles from './styles.module.css';

interface SelectCurrencyButtonProps {
  token?: any;
}

export function SelectCurrencyButton({ token }: SelectCurrencyButtonProps) {
  const classes = classnames(styles['select-currency__wrap'], {
    [`${styles['select-currency__empty']}`]: !token,
  });

  return (
    <Button variant="text" className={classes}>
      {token && <CurrencyLogo />}
      <Text>{token ? 'TONCOIN    ' : 'Select a currency    '}</Text>
      {'  '}
      <IShevronDown />
    </Button>
  );
}
