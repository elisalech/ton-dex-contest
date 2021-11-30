import { useUserState } from 'hooks/useUserState';

import truncateHash from 'utils/truncateHash';

import { Button } from 'components/Button/Button';

import styles from './navbar.module.css';
import { Row } from 'components/Layout';
import Text from 'components/Text';

export default function WalletButton() {
  const { address, handleConnect, loading } = useUserState();

  return address ? (
    <Button variant="text" className={styles.accountButton}>
      <Row>
        <Text>10.8932 TON</Text> {truncateHash(address)}
      </Row>
    </Button>
  ) : (
    <Button loading={loading} onClick={handleConnect}>
      Connect wallet
    </Button>
  );
}
