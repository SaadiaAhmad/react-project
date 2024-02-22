import logo from './logo.svg';
import './App.css';

function App() {
  let message = 'Bye there!';
  if(Math.random() > 0.5) message = 'Hello there';

  return (
    <div className="App">
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
      <div>
        <h1>{message} at {new Date().toLocaleTimeString()}</h1>
        <input type="number" min={3} placeholder="hi there" />
        <textarea autoFocus={true}></textarea>
     </div>
    </div>
  );
}

export default App;
