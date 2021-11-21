import ITonLogo from 'components/Icons/ITonLogo';
import Text from 'components/Text';

import styles from './tonlogo.module.css';

export default function TonLogo() {
  return (
    <div className={styles.wrap}>
      <ITonLogo />
      <Text weight="bold" inline>
        TON Dex
      </Text>
    </div>
  );
}
