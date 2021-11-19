import { useState } from 'react';

import NumericalInput from './NumericalInput';

export default function SwapInputPanel() {
  const [numValue, setNumValue] = useState('');

  return <NumericalInput value={numValue} onChange={setNumValue} />;
}
