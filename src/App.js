import logo from "./logo.svg";
import alienQueen from "./alienkueeen-transparent.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={alienQueen}
          className="alienQueen"
          alt="my art of an alien queen, she has neon hair, heavy eyelashes, and colorful clothes"
        />
        <p>hello world</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
