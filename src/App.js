import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
		<Header/>
    </div>
  );
}

export default App;
