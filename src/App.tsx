import { Suspense } from 'react';

import Pages from 'Pages';

import Navbar from 'components/Navbar/Navbar';
import ILoading from 'components/Icons/ILoading';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<ILoading />}>
        <Pages />
      </Suspense>
    </div>
  );
}

export default App;
