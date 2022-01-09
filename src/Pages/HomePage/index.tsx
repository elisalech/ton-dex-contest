import Headline from 'components/Headline';
import Text from 'components/Text';

import styles from './home.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.responsive_row}>
        <div>
          <Headline className={styles.headline} size="big">
            TON Decentralized Exchange
          </Headline>
          <Text color="gray">
            Welcome to the TON Decentralized Exchange. Trade and earn with TON
            ecosistem
          </Text>
        </div>
        <div className={styles.img_wrap}>
          <img src="/images/page-diamond.svg" />
        </div>
      </div>
    </main>
  );
}
