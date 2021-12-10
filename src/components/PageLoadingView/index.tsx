import TonLogo from 'components/TonLogo';

import styles from './PageLoadingView.module.css';

export default function () {
  return (
    <div className={styles.container}>
      <TonLogo
        iconProps={{ width: 120, height: 120, className: styles.logo }}
        hideText
      />
    </div>
  );
}
