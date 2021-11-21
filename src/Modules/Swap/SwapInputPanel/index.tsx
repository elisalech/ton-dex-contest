import { useState } from 'react';

import styles from './styles.module.css';

import NumericalInput from './NumericalInput';
import { Button } from 'components/Button/Button';
import { SelectCurrencyButton } from './SelectCurrencyButton';

interface SwapInputPanelProps {
  token?: any;
}

export default function SwapInputPanel({ token }: SwapInputPanelProps) {
  const [numValue, setNumValue] = useState('');

  return (
    <div className={styles['input-row']}>
      <NumericalInput value={numValue} onChange={setNumValue} />
      {token && <Button variant="text">MAX</Button>}

      <SelectCurrencyButton token={token} />
    </div>
  );
}
