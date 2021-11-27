import React, { createContext, useState, useCallback } from 'react';

import Overlay from './Overlay';

import styles from './modal.module.css';

interface IModalContext {
  onPresent: (node: React.ReactNode, key?: string) => void;
  onDismiss: () => void;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
});

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    if (closeOnOverlayClick) {
      onDismiss();
    }
  }, [closeOnOverlayClick, onDismiss]);

  return (
    <ModalContext.Provider
      value={{
        onPresent: handlePresent,
        onDismiss,
        setCloseOnOverlayClick,
      }}>
      {isOpen && (
        <div className={styles.container}>
          <Overlay shown onClick={handleOverlayDismiss} />
          {React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
              onDismiss,
            })}
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
