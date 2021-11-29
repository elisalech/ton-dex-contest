import { useCallback, useContext, useEffect } from 'react';

import { ModalContext } from 'widgets/Modal/ModalContext';
import { Handler } from 'widgets/Modal/types';

const useModal = (
  modal: React.ReactNode,
  closeOnOverlayClick = true,
): [Handler, Handler] => {
  const { onPresent, onDismiss, setCloseOnOverlayClick } =
    useContext(ModalContext);
  const onPresentCallback = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
