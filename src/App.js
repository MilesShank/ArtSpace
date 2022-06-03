import logo from "./logo.svg";
import "./App.css";
import driveData from "./gdrive-data.json";
import ArtSpaceDataLoader from "./ArtSpaceDataLoader.js";


function App() {
  var formattedData = ArtSpaceDataLoader(driveData);
  console.log("THIS IS FROM APP " + formattedData)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>eyyy</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </header>
    
    <ArtSpaceDataLoader data ={driveData}/>
    <p>eyy again</p>
    <img src="https://drive.google.com/uc?id=1B4qwC4CO101oqV3efNTYSN84q_oerHqU"/>
    </div>
  );
}

export default App;
