// import { confirmTransaction } from 'mocks/confirmService';

import { Field } from 'store/swap/types';

import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import Headline from 'components/Headline';
import IWallet from 'components/Icons/IWallet';
import Text from 'components/Text';

import SwapInputPanel from './SwapInputPanel';

import styles from './styles.module.css';
import { useUserState } from 'hooks/useUserState';

export default function SwapView() {
  const { handleConnect, address } = useUserState();

  const renderFooter = () => (
    <div className={styles.footer}>
      {address ? (
        <Button
          onClick={handleConnect}
          startIcon={<IWallet width={16} height={16} />}>
          Buy
        </Button>
      ) : (
        <Button onClick={handleConnect}>Connect wallet</Button>
      )}
    </div>
  );

  return (
    <main className={styles.container}>
      <Card footerComponent={renderFooter()} className={styles.swapCard}>
        <Headline>Swap</Headline>
        <SwapInputPanel field={Field.FROM} />
        <Text>v</Text>
        <SwapInputPanel field={Field.TO} />
      </Card>
    </main>
  );
}
