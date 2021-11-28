import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';

import { ModalProvider } from 'widgets/Modal';

const Providers: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ModalProvider>{children}</ModalProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
