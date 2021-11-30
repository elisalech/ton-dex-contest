import { Field } from 'store/swap/types';

import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import Headline from 'components/Headline';
import IWallet from 'components/Icons/IWallet';

import SwapInputPanel from './SwapInputPanel';

import styles from './styles.module.css';
import { useUserState } from 'hooks/useUserState';
import IRefresh from 'components/Icons/IRefresh';
import { useSwapActions } from 'hooks/useSwapActions';
import { useSwapState } from 'hooks/useSwapState';
import Text from 'components/Text';
import { Row } from 'components/Layout';
import { MOCK_COST_RATES } from 'mocks/costRate';

export default function SwapView() {
  const { handleConnect, address } = useUserState();
  const { handleSwitchFields, handleSwap } = useSwapActions();
  const { canSwap, tokenFrom, tokenTo } = useSwapState();

  return (
    <main className={styles.container}>
      <Card className={styles.swapCard}>
        <Headline>Swap</Headline>
        <div className={styles.inputs_wrap}>
          <SwapInputPanel field={Field.FROM} />
          <Button
            className={styles.refresh}
            variant="text"
            onClick={handleSwitchFields}>
            <IRefresh />
          </Button>
          <SwapInputPanel disabled field={Field.TO} />
        </div>
        <Row>
          <Text color="black" weight="bold" size="small">
            Slippage Tolerance:
          </Text>
          <Text>1%</Text>
        </Row>
        {tokenFrom && tokenTo && (
          <>
            <Row>
              <Text
                color="black"
                weight="bold"
                size="small">{`${tokenFrom?.symbol} per ${tokenTo?.symbol}:`}</Text>
              <Text>{MOCK_COST_RATES}</Text>
            </Row>
            <Row>
              <Text
                color="black"
                weight="bold"
                size="small">{`${tokenTo?.symbol} per ${tokenFrom?.symbol}:`}</Text>
              <Text>{1 / MOCK_COST_RATES}</Text>
            </Row>
          </>
        )}
        <div className={styles.footer}>
          {address ? (
            <Button
              disabled={!canSwap}
              onClick={canSwap ? handleSwap : () => {}}
              startIcon={canSwap && <IWallet width={22} height={22} />}>
              {canSwap ? 'Buy' : 'Enter valid amount'}
            </Button>
          ) : (
            <Button onClick={handleConnect}>Connect wallet</Button>
          )}
        </div>
      </Card>
    </main>
  );
}
