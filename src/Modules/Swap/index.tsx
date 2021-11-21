import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import Headline from 'components/Headline';
import IWallet from 'components/Icons/IWallet';
import Text from 'components/Text';
import SwapInputPanel from './SwapInputPanel';

import styles from './styles.module.css';

export default function SwapModule() {
  const renderFooter = () => (
    <div className={styles.footer}>
      <Button startIcon={<IWallet width={24} height={24} />}>
        Connect wallet
      </Button>
    </div>
  );

  return (
    <Card footerComponent={renderFooter()}>
      <Headline>Swap</Headline>
      <SwapInputPanel token />
      <Text>v</Text>
      <SwapInputPanel />
    </Card>
  );
}
