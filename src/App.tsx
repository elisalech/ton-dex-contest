import Pages from 'Pages';

import Navbar from 'components/Navbar/Navbar';

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        backgroundColor: '#b5deff',
        backgroundImage:
          'linear-gradient(43deg, #b1dbff 0%, #d6efff 46%, #ffffff 100%)',
      }}>
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
