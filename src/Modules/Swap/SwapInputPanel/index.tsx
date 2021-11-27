import { useState } from 'react';

import styles from './styles.module.css';

import NumericalInput from './NumericalInput';
import { Button } from 'components/Button/Button';
import { SelectCurrencyButton } from './SelectCurrencyButton';

interface SwapInputPanelProps {
  handleClickSelectButton: () => void;
  token?: any;
}

export default function SwapInputPanel({
  token,
  handleClickSelectButton,
}: SwapInputPanelProps) {
  const [numValue, setNumValue] = useState('');

  return (
    <div className={styles['input-row']}>
      <NumericalInput value={numValue} onChange={setNumValue} />
      {token && <Button variant="text">MAX</Button>}

      <SelectCurrencyButton onClick={handleClickSelectButton} token={token} />
    </div>
  );
}
