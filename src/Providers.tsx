import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ModalProvider } from 'widgets/Modal';

const Providers: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ModalProvider>{children}</ModalProvider>
    </BrowserRouter>
  );
};

export default Providers;
