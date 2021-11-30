import { NavLink } from 'react-router-dom';

import { AppRoutes } from 'Pages/types';

import TonLogo from 'components/TonLogo';
import Text from 'components/Text';
import { Row } from 'components/Layout';

import WalletButton from './WalletButton';

import styles from './navbar.module.css';

const navlinks = [
  { to: AppRoutes.SWAP, label: 'Swap' },
  { to: AppRoutes.POOLS, label: 'Pools' },
];

export default function Navbar() {
  return (
    <Row as="header" className={styles.container}>
      <Row>
        <NavLink to={AppRoutes.HOME} className={styles.home}>
          <TonLogo />
        </NavLink>
        <nav className={styles['nav-wrap']}>
          {navlinks.map(item => (
            <NavLink key={item.to} className={styles['nav-link']} to={item.to}>
              <Text color="blue" weight="bold" className={styles['nav-text']}>
                {item.label}
              </Text>
            </NavLink>
          ))}
        </nav>
      </Row>
      <WalletButton />
    </Row>
  );
}
