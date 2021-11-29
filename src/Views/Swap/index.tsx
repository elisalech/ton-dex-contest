import { confirmTransaction } from 'mocks/confirmService';
import { useModal } from 'widgets/Modal';

import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import Headline from 'components/Headline';
import IWallet from 'components/Icons/IWallet';
import Text from 'components/Text';
import SwapInputPanel from './SwapInputPanel';

import styles from './styles.module.css';
import CurrencySearchModal from './CurrencySearchModal/CurrencySearchModal';

export default function SwapModule() {
  const [openModal] = useModal(<CurrencySearchModal />);

  const handleConnect = () => {
    confirmTransaction('Do you want to connect your wallet?')
      .then(() => {
        console.log('Wallet connected!');
      })
      .catch(() => console.log("Couldn't connect wallet"));
  };

  const renderFooter = () => (
    <div className={styles.footer}>
      <Button
        onClick={handleConnect}
        startIcon={<IWallet width={24} height={24} />}>
        Connect wallet
      </Button>
    </div>
  );

  return (
    <Card footerComponent={renderFooter()}>
      <Headline>Swap</Headline>
      <SwapInputPanel handleClickSelectButton={openModal} token />
      <Text>v</Text>
      <SwapInputPanel handleClickSelectButton={openModal} />
    </Card>
  );
}
