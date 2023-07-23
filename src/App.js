// import text from './bitmap_Layer1.svg';
import './App.css';

import MainGrid from './components/main_grid';
import Navbar from './components/navbar';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <MainGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header>

*/