import React, { useEffect } from 'react';

import { Button } from 'components/Button/Button';
import Headline from 'components/Headline';
import IArrowLeft from 'components/Icons/IArrowLeft';
import IClose from 'components/Icons/IClose';

import { InjectedProps } from './types';

import styles from './modal.module.css';
import classnames from 'libs/classnames';
import { Row } from 'components/Layout';
import { Card } from 'components/Card/Card';

interface Props extends InjectedProps {
  title: string;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  onBack?: () => void;
}

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  className,
  closeOnEscape = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (closeOnEscape) {
      const handlePress = (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
          onDismiss?.();
        }
      };

      document.addEventListener('keyup', handlePress);

      return () => {
        document.removeEventListener('keyup', handlePress);
      };
    }
  }, [closeOnEscape, onDismiss]);

  return (
    <Card withPadding={false} className={classnames(styles.base, className)}>
      <Row className={styles.header}>
        <div>
          {onBack && (
            <Button variant="text" onClick={onBack} area-label="go back">
              <IArrowLeft color="primary" />
            </Button>
          )}
          <Headline>{title}</Headline>
        </div>
        {showCloseButton && (
          <Button
            variant="text"
            onClick={onDismiss}
            aria-label="Close the dialog">
            <IClose />
          </Button>
        )}
      </Row>
      <div>{children}</div>
    </Card>
  );
};

export default Modal;
