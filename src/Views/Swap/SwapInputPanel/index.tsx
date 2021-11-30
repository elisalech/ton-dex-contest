import { useState } from 'react';

import { Field } from 'store/swap/types';

import { useFieldToken } from 'hooks/useSwapState';
import { useSwapActions } from 'hooks/useSwapActions';
import { useTokenBalance } from 'hooks/useTokenBalances';

import { Column, Row } from 'components/Layout';
import { Button } from 'components/Button/Button';
import Text from 'components/Text';

import NumericalInput from './NumericalInput';
import { SelectCurrencyButton } from './SelectCurrencyButton';

import styles from './styles.module.css';

interface SwapInputPanelProps {
  field: Field;
}

export default function SwapInputPanel({ field }: SwapInputPanelProps) {
  const [numValue, setNumValue] = useState('');
  const { handleClickSelectButton } = useSwapActions();
  const token = useFieldToken(field);
  const balance = useTokenBalance(token);
  return (
    <Column>
      <Row fullWidth>
        <Text className={styles.source}>{field}:</Text>
        {balance && (
          <Row>
            <Text size="small">Balance: </Text>
            <Text size="small">{`    ${balance.amount}`}</Text>
            <Button color="blue" variant="text">
              MAX
            </Button>
          </Row>
        )}
      </Row>
      <Row fullWidth>
        <NumericalInput value={numValue} onChange={setNumValue} />

        <SelectCurrencyButton
          onClick={() => handleClickSelectButton(field)}
          token={token}
        />
      </Row>
    </Column>
  );
}
