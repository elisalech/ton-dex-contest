import { ChangeEvent, useCallback, useState } from 'react';

import { Field } from 'store/swap/types';

import { useFieldToken } from 'hooks/useSwapState';
import { useSwapActions } from 'hooks/useSwapActions';
import { useTokenBalance } from 'hooks/useTokenBalances';

import { Column, Row } from 'components/Layout';
import Text from 'components/Text';
import Input from 'components/Input/Input';

import { SelectCurrencyButton } from './SelectCurrencyButton';

// import styles from './styles.module.css';

const inputRegex = RegExp('^[0-9]*.?[0-9]*$');

interface SwapInputPanelProps {
  field: Field;
}

export default function LiquidityInputPanel({ field }: SwapInputPanelProps) {
  const [numValue, setNumValue] = useState('');
  const { handleClickSelectButton } = useSwapActions();
  const token = useFieldToken(field);
  const balance = useTokenBalance(token);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value.replace(/,/g, '.');

      if (nextValue === '' || inputRegex.test(nextValue)) {
        setNumValue(nextValue);
      }
    },
    [setNumValue],
  );

  return (
    <Column>
      <Row fullWidth>
        {/* <Text className={styles.source}>{field}:</Text> */}
        {balance?.amount && (
          <Row>
            <Text size="small">Balance: </Text>
            <Text size="small">{`    ${balance.amount}`}</Text>
          </Row>
        )}
      </Row>
      <Row fullWidth>
        <Input disabled value={numValue} onChange={handleChange} />

        <SelectCurrencyButton
          onClick={() => handleClickSelectButton(field)}
          token={token}
        />
      </Row>
    </Column>
  );
}
