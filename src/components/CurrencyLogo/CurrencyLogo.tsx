import { useMemo } from 'react';

import { Address, Currency } from 'types';

import styles from './styles.module.css';

interface CurrencyLogoProps {
  currency?: Currency;
  address?: Address;
}

export function CurrencyLogo({ currency, address }: CurrencyLogoProps) {
  const src = useMemo(() => {
    if (address) {
      return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`;
      // return `https://tokens.1inch.io/${address}.png`;
    }
    return currency?.logoURI;
  }, [address, currency]);

  return <img className={styles.logo} src={src} />;
}
