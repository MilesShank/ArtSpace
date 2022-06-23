import "./App.css";
import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import DisplayPieces from "./components/DisplayPieces";
import Filters from "./components/DisplayFilters";
import loading from "./localAssets/loading.gif";
import unique from "./utilityFunctions";
const requestOptions = {
  method: "GET",
  redirect: "follow",
};
function App() {
  const [pieceMap, setPieceMap] = useState(null); //where we'll store all pieces as formatted data
  const [isLoading, setIsLoading] = useState(false); //for loading screens
  const [allFilters, setAllFilters] = useState([]); // for all filters
  const [activeFilters, setActiveFilters] = useState([]); //for active filters

  useEffect(() => {
    //this works in place of the previous ComponentDidMount() function
    setIsLoading(true);
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/values/Sheet1" +
        "?key=" +
        driveData.gkey
    ).then((response) => {
      if (response.status !== 200) {
        throw Error("issue fetching data from sheets API");
      }
      return response
        .json() //convert API response to json format.
        .then((data) => {
          setPieceMap(mapData(data.values));
          setIsLoading(false);
        })
        .catch((error) => {
          throw Error("oops another error");
        });
    });
    //mapData returns an array of maps, each map is key Value pairs for one Piece/row of the spreadhseet.
    function mapData(dataValues) {
      const dataToMap = dataValues;
      var formattedData = [];
      var dataCategories = [];

      const dataKeys = dataToMap.shift(); //shift returns first element, also deletes it from array.

      //optional TODO: there's got to be a better way to do this than nested for loops, right?
      for (let j = 0; j < dataToMap.length; j++) {
        const pushPieceMap = new Map();
        for (let i = 0; i < dataKeys.length; i++) {
          pushPieceMap.set(dataKeys[i], dataToMap[j][i]);
        }

        formattedData.push(pushPieceMap); //for displaying pieces
        dataCategories.push(pushPieceMap.get("Category")); //for displaying filters
      }

      return sortFilterData(dataCategories, formattedData); //all category values + 18+ are put into allFilters, all categories except 18+ go into active filters.
    }

    function sortFilterData(dataCategories, formattedData) {
      setActiveFilters(dataCategories.filter(unique)); //want the page to start with all category fiters actve.
      console.log(activeFilters);
      dataCategories.push("18+"); //for my website I want mature content to be manually selected before its displayed.
      setAllFilters(dataCategories.filter(unique));
      formattedData.forEach(setPieceActivity);
      return formattedData;
    }
  }, []);

  function setPieceActivity(piece) {
    console.log(activeFilters);
    var adult = piece.get("NSFW") === "TRUE";
    if (
      (activeFilters.includes("18+") || adult == false) &&
      piece.get("Role") !== "Documentation"
    ) {
      activeFilters.includes(piece.get("Category"))
        ? piece.set("isActive", true)
        : piece.set("isActive", false);
    }
    console.log(piece);
  }

  //we don't need a render function, just return what should render.
  return !isLoading && pieceMap && activeFilters ? ( //implement splash page with local assets to minimize loading.
    // boolean? () : () is the syntax for conditional rendering
    <div className="App">
      <DisplayPieces pieceMap={pieceMap} />
      <Filters allFilters={allFilters} activeFilters={activeFilters} />
    </div>
  ) : (
    //we're gunna need to prolly skeleton load inside displayPieces
    <div> loading... please be patient </div>
  );
}

export default App;
