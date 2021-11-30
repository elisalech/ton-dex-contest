import Headline from 'components/Headline';
import Text from 'components/Text';

import styles from './home.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <Headline>TON Decentralized Exchange</Headline>
      <Text color="gray">
        Welcome to the TON Decentralized Exchange. Trade and earn with TON
        ecosistem
      </Text>
    </main>
  );
}
