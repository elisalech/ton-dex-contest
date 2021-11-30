import { useUserState } from 'hooks/useUserState';

import truncateHash from 'utils/truncateHash';

import { Button } from 'components/Button/Button';
import Text from 'components/Text';

import styles from './navbar.module.css';

export default function WalletButton() {
  const { address, handleConnect, loading, tonBalance } = useUserState();

  return address ? (
    <Button size="small" variant="outline" className={styles.accountButton}>
      <Text size="small" color="inherit" className={styles.balance}>
        {tonBalance} Toncoin
      </Text>{' '}
      <Text color="inherit" className={styles.address}>
        {truncateHash(address)}
      </Text>
    </Button>
  ) : (
    <Button loading={loading} onClick={handleConnect}>
      Connect wallet
    </Button>
  );
}
