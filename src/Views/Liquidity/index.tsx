import { Field } from 'store/swap/types';

import { Button } from 'components/Button/Button';
import { Card } from 'components/Card/Card';
import Headline from 'components/Headline';
import IWallet from 'components/Icons/IWallet';
import IAdd from 'components/Icons/IAdd';

import LiquidityInputPanel from './LiquidityInputPanel';

import { useUserState } from 'hooks/useUserState';
import { useCreateLiquidityMode } from 'hooks/useCreateLiquidityMode';
import { useFetchPools } from 'hooks/useFetchPools';
import { Input } from 'components/Input/Input';
import { Separator } from 'components/Separator/Separator';

import styles from './styles.module.css';
import StatsCard from 'components/StatsCard';
import { useLiquidityInfo } from 'hooks/useLiquidityInfo';
import { useLiquidityActions } from 'hooks/useLiquidityActions';

export default function LiquidityView() {
  useFetchPools();
  const { handleConnect, address } = useUserState();
  const { isProvideMode } = useCreateLiquidityMode();
  const statsData = useLiquidityInfo();
  const { handleCreateLiquidity } = useLiquidityActions();

  const label = isProvideMode ? 'Provide' : 'Create';

  return (
    <main className={styles.container}>
      <Card className={styles.card}>
        <Headline>{label} Liquidity</Headline>
        <div className={styles.inputs_wrap}>
          <LiquidityInputPanel field={Field.FROM} />
          <Button className={styles.addIcon} variant="text">
            <IAdd />
          </Button>
          <LiquidityInputPanel field={Field.TO} />
        </div>
        <Separator />
        <Input placeholder="0.0$" label="Type USD amount" />
        <div className={styles.footer}>
          {address ? (
            <Button
              onClick={handleCreateLiquidity}
              startIcon={<IWallet width={22} height={22} />}>
              {label}
            </Button>
          ) : (
            <Button onClick={handleConnect}>Connect wallet</Button>
          )}
        </div>
      </Card>
      {statsData && <StatsCard className={styles.card} statsData={statsData} />}
    </main>
  );
}
