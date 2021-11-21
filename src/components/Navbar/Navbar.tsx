import { NavLink } from 'react-router-dom';

import { AppRoutes } from 'Pages/types';

import TonLogo from 'components/TonLogo';
import Text from 'components/Text';

import styles from './navbar.module.css';

const navlinks = [
  { to: AppRoutes.SWAP, label: 'Swap' },
  { to: AppRoutes.POOLS, label: 'Pools' },
];

export default function Navbar() {
  return (
    <header className={styles.container}>
      <NavLink to={AppRoutes.HOME}>
        <TonLogo />
      </NavLink>
      <nav className={styles['nav-wrap']}>
        {navlinks.map(item => (
          <NavLink key={item.to} to={item.to}>
            <Text weight="bold" className={styles['nav-link']}>
              {item.label}
            </Text>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
