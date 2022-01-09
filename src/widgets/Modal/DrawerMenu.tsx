import classnames from 'libs/classnames';
import { Link } from 'react-router-dom';

import { AppRoutes } from 'Pages/types';

import TonLogo from 'components/TonLogo';

import styles from './modal.module.css';
import { useModalContext } from 'hooks/useModal';
import NavLink from 'components/NavLink';
import { navlinks } from 'components/Navbar/Navbar';

export function DrawerMenu() {
  const { isDrawerOpen, setIsDrawerOpen } = useModalContext();

  const containerClasses = classnames(
    styles.drawer,
    isDrawerOpen && styles.shown,
  );

  const handleNavigate = () => {
    setIsDrawerOpen(false);
  };

  return (
    <aside className={containerClasses}>
      <div className={styles.drawer_header}>
        <Link onClick={handleNavigate} to={AppRoutes.HOME}>
          <TonLogo />
        </Link>
      </div>
      <nav className={styles['nav-wrap']}>
        {navlinks.map(item => (
          <NavLink onClick={handleNavigate} key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
