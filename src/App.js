import logo from "./logo.svg";
import "./App.css";
import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import TestComponent from "./components/TestComponent";
import { data } from "autoprefixer";
const gDriveImgLink = "https://drive.google.com/uc?id=";
var imgData;
const requestOptions = {
  method: 'GET',
  redirect: 'follow'

};
var imgData;

function App() {

  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    loadData();
  });

  async function loadData() {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/values/Sheet1"+"?key="+driveData.gkey)
    .then(response => response.json())
    .then(data => formatData(data.values))
    .catch(error => console.log('error', error));
    };



    function formatData(dataValues){
      const imgDataKeys = dataValues[0]
      console.log("img data keys" + imgDataKeys
      )
      console.log("")
      console.log(dataValues)
      setImgData(dataValues)

      // console.log("FROM FORMAT DATA" + imgData);
    } 

    function DisplayOneImage(){
      const imgLink = (gDriveImgLink + imgData);
        <img src={imgLink}> </img>
    };

  return (
    <div className="App">
      <TestComponent/>
      <DisplayOneImage/>
        <p>
          {imgData}
          <code>eyyy</code>
        </p>
      <p>eyy again</p>
    </div>
     
  );
}

export default App;
