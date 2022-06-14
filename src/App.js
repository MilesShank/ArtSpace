import logo from "./logo.svg";
import "./App.css";
import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import TestComponent from "./components/TestComponent";
import DisplayPieces from "./components/DisplayPieces";
import { data } from "autoprefixer";
import { composeP, on } from "ramda";
import React, {Component} from "react";
const gDriveImgLink = "https://drive.google.com/uc?id=";
var imgLink;
const requestOptions = {
  method: 'GET',
  redirect: 'follow'

};

class App extends Component {

  constructor(){
    super();
    this.state={
      imgDataResponse: [], //this is where we will store the response from the google sheets api
      pieceMap: null
    };
  }

  mapData(dataValues) {
    const dataToMap = dataValues;
    var formattedData = [];    
    const dataKeys = dataToMap.shift();
    // console.log(dataKeys);
    // console.log("MAPDATA: " + dataToMap[1][1]);
    
    for(let j = 0; j < dataToMap.length; j++){
      const pushPieceMap = new Map();
      for (let i = 0; i<dataKeys.length; i++){
        pushPieceMap.set(dataKeys[i], dataToMap[j][i]);
      }
      // console.log(pushPieceMap);
      formattedData.push(pushPieceMap);
      // console.log(formattedData)  
    }
    // console.log("IN MAPDATA" + formattedData[1].entries());
    return(formattedData);
  }  
    /* componentDidMount -API fetch function for App component 
    function has the call to the google sheets api. The long string of characters is the ID 
    of the publically available sheet with all the data for the website.
    link: https://docs.google.com/spreadsheets/d/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/edit?usp=sharing
    
    We are currently only asking for the first sheet of values. thus values/Sheet1
    the final part of the URL, the key, is secret, & is what makes the call work. 
    TODO: where are we storing the key once this app is deployed?
    */ 

  componentDidMount() {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/values/Sheet1"+"?key="+driveData.gkey)
 
      .then(response => {
        if (!response.ok) {
          throw Error("issue fetching data from sheets API");
        }
        return response.json() //convert API response to json format.
      .then(data => {
        this.setState({imgDataResponse : data.values})
        const formattedData = this.mapData(data.values); 
        this.setState({ pieceMap: formattedData}); //data.values holds the info on the pieces.
        console.log("COMPONENT DID MOUNT:" + this.state.pieceMap);
         
      })
      .catch(error => {
        throw Error("oops another error");
        });
      }
      
    );
  };
  

    render(){
      if(this.state.pieceMap){ //everything needs to be renderable before we render it!
        return (
          <div className="App">
            <DisplayPieces pieces={this.state.pieceMap} className="w-2/3"/> 
              <code className="text-3xl font-bold underline">eyyy</code>
          </div>
          );
      }
    }    
  }

export default App;
