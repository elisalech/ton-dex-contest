import styles from './styles.module.css';

import { Currency } from 'types';

interface CurrencyLogoProps {
  currency: Currency;
}

export function CurrencyLogo({ currency }: CurrencyLogoProps) {
  return <img className={styles.logo} src={currency.logoURI} />;
}
