import "./App.css";
import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import DisplayPieces from "./components/DisplayPieces";

const requestOptions = {
  method: "GET",
  redirect: "follow",
};
function App() {
  const [pieceMap, setPieceMap] = useState(null); //where we'll store formatted data
  const [isLoading, setIsLoading] = useState(false); //for skeleton loading

  useEffect(() => {
    //this works in place of the previous ComponentDidMount() function
    setIsLoading(true);
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/values/Sheet1" +
        "?key=" +
        driveData.gkey
    ).then((response) => {
      if (response.status != 200) {
        throw Error("issue fetching data from sheets API");
      }
      return response
        .json() //convert API response to json format.
        .then((data) => {
          console.log(data);
          setPieceMap(mapData(data.values));
          setIsLoading(false);
        })
        .catch((error) => {
          throw Error("oops another error");
        });
    });
  }, []);

  //mapData returns an array of maps, each map is key Value pairs for one Piece/row of spreadhseet.
  function mapData(dataValues) {
    const dataToMap = dataValues;
    var formattedData = [];
    const dataKeys = dataToMap.shift(); //shift returns first element, also deletes it from array.

    //optional TODO: there's got to be a better way to do this than nested for loops, right?
    for (let j = 0; j < dataToMap.length; j++) {
      const pushPieceMap = new Map();
      for (let i = 0; i < dataKeys.length; i++) {
        pushPieceMap.set(dataKeys[i], dataToMap[j][i]);
      }
      formattedData.push(pushPieceMap);
    }
    return formattedData;
  }
  //we don't need a render function, just return what should render.
  return !isLoading && pieceMap ? ( //implement splash page with local assets to minimize loading.
    // boolean? () : () is the syntax for conditional rendering
    <div className="App">
      <DisplayPieces pieceMap={pieceMap} />

      <code className="text-3xl font-bold underline">eyyy</code>
    </div>
  ) : (
    //we're gunna need to prolly skeleton load inside displayPieces
    <div>thinking wheel or animation goes here </div>
  );
}

export default App;
