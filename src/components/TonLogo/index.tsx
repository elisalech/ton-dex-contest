import ITonLogo from 'components/Icons/ITonLogo';
import Text from 'components/Text';
import { SVGProps } from 'react';

import styles from './tonlogo.module.css';

interface TonLogoProps {
  iconProps?: SVGProps<SVGSVGElement>;
  hideText?: boolean;
}

export default function TonLogo({ hideText, iconProps = {} }: TonLogoProps) {
  return (
    <div className={styles.wrap}>
      <ITonLogo {...iconProps} />
      {!hideText && (
        <Text weight="bold" inline>
          TON Dex
        </Text>
      )}
    </div>
  );
}
