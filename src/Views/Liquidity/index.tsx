import { Field } from 'store/swap/types';

import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import Headline from 'components/Headline';
import IWallet from 'components/Icons/IWallet';
import IAdd from 'components/Icons/IAdd';

import LiquidityInputPanel from './LiquidityInputPanel';

import styles from './styles.module.css';
import { useUserState } from 'hooks/useUserState';

import { useFetchPools } from 'hooks/useFetchPools';
import { Input } from 'components/Input/Input';
import { Separator } from 'components/Separator/Separator';

export default function LiquidityView() {
  useFetchPools();
  const { handleConnect, address } = useUserState();

  return (
    <main className={styles.container}>
      <Card className={styles.swapCard}>
        <Headline>Create Liquidity</Headline>
        <div className={styles.inputs_wrap}>
          <LiquidityInputPanel field={Field.FROM} />
          <Button className={styles.addIcon} variant="text">
            <IAdd />
          </Button>
          <LiquidityInputPanel field={Field.TO} />
        </div>
        <Separator />
        <Input placeholder="0.0$" label="Or type USD amount" />
        <div className={styles.footer}>
          {address ? (
            <Button
              onClick={handleConnect}
              startIcon={<IWallet width={22} height={22} />}>
              Buy
            </Button>
          ) : (
            <Button onClick={handleConnect}>Connect wallet</Button>
          )}
        </div>
      </Card>
    </main>
  );
}
