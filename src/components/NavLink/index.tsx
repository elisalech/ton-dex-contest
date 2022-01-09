import { FC } from 'react';
import { NavLink as NavLinkBase, NavLinkProps } from 'react-router-dom';

import styles from './navlink.module.css';
import Text from 'components/Text';

const NavLink: FC<NavLinkProps> = ({ children, className, ...rest }) => (
  <NavLinkBase className={className || styles.link} {...rest}>
    <Text color="blue" weight="bold" className={styles.text}>
      {children}
    </Text>
  </NavLinkBase>
);

export default NavLink;
