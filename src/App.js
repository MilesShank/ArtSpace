import logo from "./logo.svg";
import "./App.css";
import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import TestComponent from "./components/TestComponent";
const gDriveImgLink = "https://drive.google.com/uc?id=";
var imgData;
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var imgData;

function App() {

  function loadData() {
    fetch("https://eoimtcqaziwadc2.m.pipedream.net/", requestOptions)
    .then(response => response.json())
    .then(data => setImgData(data))
    .catch(error => console.log('error', error));
    };

  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    loadData();
  });

    function formatData(responseJson){
      imgData = responseJson;
      console.log(imgData[1][0]);
    } 
  return (
    <div className="App">
      <TestComponent/>
        <p>
          {imgData}
          Edit <code>eyyy</code> and save to reload.
        </p>
        <test/>
    <p>eyy again</p>
    </div>
     
  );
}

export default App;
