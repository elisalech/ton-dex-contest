import { Suspense } from 'react';

import Pages from 'Pages';

import Navbar from 'components/Navbar/Navbar';
import PageLoadingView from 'components/PageLoadingView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<PageLoadingView />}>
        <Pages />
      </Suspense>
    </div>
  );
}

export default App;
