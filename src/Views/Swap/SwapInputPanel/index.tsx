import { useState } from 'react';

import styles from './styles.module.css';

import NumericalInput from './NumericalInput';
import { Button } from 'components/Button/Button';
import { SelectCurrencyButton } from './SelectCurrencyButton';
import { Row } from 'components/Layout';
import Text from 'components/Text';
import { useFieldToken } from 'hooks/useSwapState';
import { Field } from 'store/swap/types';
import { useSwapActions } from 'hooks/useSwapActions';
// import { useTokenBalance } from 'hooks/useTokenBalances';

interface SwapInputPanelProps {
  field: Field;
}

export default function SwapInputPanel({ field }: SwapInputPanelProps) {
  const [numValue, setNumValue] = useState('');
  const { handleClickSelectButton } = useSwapActions();

  const token = useFieldToken(field);

  // const balance = useTokenBalance();

  return (
    <div className={styles['input-row']}>
      {true && (
        <Row>
          <Text>Balance: </Text>
          <Text>12.22</Text>
        </Row>
      )}
      <NumericalInput value={numValue} onChange={setNumValue} />
      {token && <Button variant="text">MAX</Button>}

      <SelectCurrencyButton
        onClick={() => handleClickSelectButton(field)}
        token={token}
      />
    </div>
  );
}
