import { useMemo, useState } from 'react';

import classnames from 'libs/classnames';

import { Address, Currency } from 'types';

import { Row } from 'components/Layout';
import IQuestion from 'components/Icons/IQuestion';

import styles from './styles.module.css';

interface CurrencyLogoProps {
  currency?: Currency;
  address?: Address;
  withMarginRight?: boolean;
  className?: string;
}

export function CurrencyLogo({
  currency,
  address,
  withMarginRight,
  className,
}: CurrencyLogoProps) {
  const [isError, setIsError] = useState(false);
  const src = useMemo(() => {
    if (address) {
      // return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`;
      return `https://tokens.1inch.io/${address}.png`;
    }
    return currency?.logoURI;
  }, [address, currency]);

  const classes = classnames(
    styles.logo,
    withMarginRight && styles.margin_right,
    className,
  );

  return isError ? (
    <IQuestion className={classes} />
  ) : (
    <img className={classes} src={src} onError={() => setIsError(true)} />
  );
}

interface DoubleCurrencyLogoProps {
  currency0?: Currency;
  address0?: Address;
  currency1?: Currency;
  address1?: Address;
  withMarginRight?: boolean;
  className?: string;
}

export const DoubleCurrencyLogo = ({
  withMarginRight,
  currency0,
  currency1,
  address0,
  address1,
  className,
}: DoubleCurrencyLogoProps) => {
  return (
    <Row>
      <CurrencyLogo
        className={className}
        currency={currency0}
        address={address0}
      />
      <CurrencyLogo
        currency={currency1}
        address={address1}
        withMarginRight={withMarginRight}
        className={classnames(styles.second, className)}
      />
    </Row>
  );
};
