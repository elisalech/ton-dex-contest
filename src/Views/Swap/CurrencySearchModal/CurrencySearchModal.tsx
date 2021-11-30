import { useRef, useState, useCallback, ChangeEvent } from 'react';
import { FixedSizeList } from 'react-window';

import { Modal } from 'widgets/Modal';

import { useSwapActions } from 'hooks/useSwapActions';
import useDebounce from 'hooks/useDebounce';
import useFilteredTokens from 'hooks/useFilteredTokens';

import Input from 'components/Input/Input';

import CurrencyList from './CurrencyList';
import FavouriteList from './FavouriteList';

import styles from './search_modal.module.css';

interface CurrencySearchModalProps {
  onDismiss?: () => void;
}

export default function CurrencySearchModal(props: CurrencySearchModalProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery = useDebounce(searchQuery);
  const data = useFilteredTokens(debouncedQuery);
  const { selectFieldCurrency } = useSwapActions();

  const fixedList = useRef<FixedSizeList>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);
  // useDebounce;

  return (
    <Modal onDismiss={props.onDismiss} title="Select a Token">
      <div className={styles.container}>
        <div className={styles.input_wrap}>
          <Input value={searchQuery} onChange={handleChange} autoFocus />
        </div>
        <FavouriteList selectFieldCurrency={selectFieldCurrency} />
        <CurrencyList
          // @ts-ignore
          fixedListRef={fixedList}
          onCurrencySelect={selectFieldCurrency}
          height={450}
          currencies={data}
        />
      </div>
    </Modal>
  );
}
