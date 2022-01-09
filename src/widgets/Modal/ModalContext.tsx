import React, { createContext, useState, useCallback } from 'react';

import Overlay from './Overlay';
import { DrawerMenu } from './DrawerMenu';

import styles from './modal.module.css';
import classnames from 'libs/classnames';

interface IModalContext {
  onPresent: (node: React.ReactNode, key?: string) => void;
  onDismiss: () => void;
  setIsDrawerOpen: (value: boolean) => void;
  isDrawerOpen: boolean;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({
  onPresent: () => null,
  onDismiss: () => null,
  isDrawerOpen: false,
  setCloseOnOverlayClick: () => true,
  setIsDrawerOpen: () => {},
});

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handlePresent = useCallback(
    (node: React.ReactNode) => {
      setModalNode(node);
      setIsOpen(true);
    },
    [setModalNode, setIsOpen],
  );

  const onDismiss = useCallback(() => {
    setModalNode(undefined);
    setIsOpen(false);
  }, [setModalNode, setIsOpen]);

  const handleOverlayDismiss = useCallback(() => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
    if (closeOnOverlayClick) {
      onDismiss();
    }
  }, [closeOnOverlayClick, isDrawerOpen, setIsDrawerOpen, onDismiss]);

  const containerClasses = classnames(
    styles.container,
    (isOpen || isDrawerOpen) && styles.shown,
  );

  return (
    <ModalContext.Provider
      value={{
        onPresent: handlePresent,
        onDismiss,
        isDrawerOpen,
        setCloseOnOverlayClick,
        setIsDrawerOpen,
      }}>
      <DrawerMenu />
      <div className={containerClasses}>
        <Overlay onClick={handleOverlayDismiss} />
        {React.isValidElement(modalNode) &&
          React.cloneElement(modalNode, {
            onDismiss,
          })}
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
