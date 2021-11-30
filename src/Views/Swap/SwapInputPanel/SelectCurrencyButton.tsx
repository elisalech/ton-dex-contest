import { Currency } from 'types';

import { Button } from 'components/Button/Button';
import { CurrencyLogo } from 'components/CurrencyLogo/CurrencyLogo';
import IShevronDown from 'components/Icons/IShevronDown';
import Text from 'components/Text';

interface SelectCurrencyButtonProps {
  onClick: () => void;
  token?: Currency;
}

export function SelectCurrencyButton({
  token,
  onClick,
}: SelectCurrencyButtonProps) {
  return (
    <Button onClick={onClick} variant="text">
      {token && <CurrencyLogo withMarginRight currency={token} />}
      <Text size="medium">{token ? token.symbol : 'Select'}</Text>
      {'  '}
      <IShevronDown />
    </Button>
  );
}
