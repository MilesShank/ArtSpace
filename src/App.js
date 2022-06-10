import logo from "./logo.svg";
import "./App.css";
import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import TestComponent from "./components/TestComponent";
import DisplayOneImage from "./components/DisplayOneImage";
import { data } from "autoprefixer";
import { on } from "ramda";
const gDriveImgLink = "https://drive.google.com/uc?id=";
var imgLink;
const requestOptions = {
  method: 'GET',
  redirect: 'follow'

};

function App() {

  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    loadPieceData();
  }, []); 

  // This will render all the pieces in order of ID.
  // We will eventually need loadPieceDataByCategory and loadPieceDataByProject. Rename this to loadPieceDataById at that time.
  // I think separate API calls will be best for this rather than exessive front end data re-organization. 
  function loadPieceData() {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/values/Sheet1"+"?key="+driveData.gkey)
    .then(response => response.json())
    .then(data => formatData(data.values))
    .catch(error => console.log('error', error));
    };



    function formatData(dataValues){
      const imgDataKeys = dataValues[0]
      console.log("img data keys " + imgDataKeys
      )
      console.log(dataValues)
      setImgData(dataValues)
      console.log("imgData: " + imgData); 
      imgLink = (gDriveImgLink + dataValues[1][1]);  
      //for some reason imgData is available after setImgData inconsistently. Missing something here.
    } 

      return (
        <div className="App">
          
          <TestComponent/>
          <DisplayOneImage imgLinkTest={imgData[2][1]} /> 
          {/* imgData[2][1] is an empty object atm. Why? We will certainly find out soon. it is rendering tho! */}
            <p>
              <img src = {imgLink}/> 
               {/* this only works if imgLink is defined at the  top. want to know why that is, ideally.*/}
              <code>eyyy</code>
            </p>
        </div>
        
      );
    }

export default App;
