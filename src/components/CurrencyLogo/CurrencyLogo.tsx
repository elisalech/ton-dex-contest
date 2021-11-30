import { useMemo, useState } from 'react';

import { Address, Currency } from 'types';

import IQuestion from 'components/Icons/IQuestion';

import styles from './styles.module.css';
import classnames from 'libs/classnames';

interface CurrencyLogoProps {
  currency?: Currency;
  address?: Address;
  withMarginRight?: boolean;
}

export function CurrencyLogo({
  currency,
  address,
  withMarginRight,
}: CurrencyLogoProps) {
  const [isError, setIsError] = useState(false);
  const src = useMemo(() => {
    if (address) {
      return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`;
      // return `https://tokens.1inch.io/${address}.png`;
    }
    return currency?.logoURI;
  }, [address, currency]);

  return isError ? (
    <IQuestion />
  ) : (
    <img
      className={classnames(
        styles.logo,
        withMarginRight && styles.margin_right,
      )}
      src={src}
      onError={() => setIsError(true)}
    />
  );
}
