import Pages from 'Pages';

import Navbar from 'components/Navbar/Navbar';

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        backgroundColor: '#d6efff',
        backgroundImage: 'linear-gradient(20deg, #d6efff 0%, #ffffff 100%)',
        // backgroundColor: '#303757',
        // backgroundImage: 'linear-gradient(20deg, #1B243D 0%, #303757 100%)',
      }}>
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
