import { Link } from 'react-router-dom';

import { AppRoutes } from 'Pages/types';

import { useModalContext } from 'hooks/useModal';
import TonLogo from 'components/TonLogo';
import IMenu from 'components/Icons/IMenu';
import NavLink from 'components/NavLink';
import { Row } from 'components/Layout';

import WalletButton from './WalletButton';

import styles from './navbar.module.css';

export const navlinks = [
  { to: AppRoutes.SWAP, label: 'Swap' },
  { to: AppRoutes.POOLS, label: 'Pools' },
];

export default function Navbar() {
  const { setIsDrawerOpen } = useModalContext();

  return (
    <Row as="header" className={styles.container}>
      <div className={styles.drawer_btn}>
        <IMenu onClick={() => setIsDrawerOpen(true)} />
      </div>
      <Row className={styles.desktop}>
        <Link to={AppRoutes.HOME} className={styles.home}>
          <TonLogo />
        </Link>
        <nav className={styles['nav-wrap']}>
          {navlinks.map(item => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Row>
      <WalletButton />
    </Row>
  );
}
