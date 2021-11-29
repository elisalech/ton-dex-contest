import { useRef, useState, useCallback, ChangeEvent } from 'react';
import { FixedSizeList } from 'react-window';

import { Modal } from 'widgets/Modal';

import Input from 'components/Input/Input';

import styles from './search_modal.module.css';
import CurrencyList from './CurrencyList';
import { TOKENS_DATA } from 'mocks/tokens';
import FavouriteList from './FavouriteList';
import { useSwapActions } from 'hooks/useSwapActions';

interface CurrencySearchModalProps {
  onDismiss?: () => void;
}

export default function CurrencySearchModal(props: CurrencySearchModalProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { selectFieldCurrency } = useSwapActions();

  const fixedList = useRef<FixedSizeList>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);
  // useDebounce;

  return (
    <Modal onDismiss={props.onDismiss} title="Select a Token">
      <div className={styles.container}>
        <Input value={searchQuery} onChange={handleChange} autoFocus />
        <FavouriteList />
        <CurrencyList
          // @ts-ignore
          fixedListRef={fixedList}
          onCurrencySelect={selectFieldCurrency}
          height={450}
          currencies={TOKENS_DATA}
        />
      </div>
    </Modal>
  );
}
