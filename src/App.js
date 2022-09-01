import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import DisplayPieces from "./components/DisplayPieces";
import Filters from "./components/DisplayFilters";
import { unique } from "./utilityFunctions";
import React from "react";
import "./pieceFeed.css";
import Header from "./components/Header";

function App() {
  const [pieceMap, setPieceMap] = useState(null); //where we'll store all pieces as formatted data
  const [isLoading, setIsLoading] = useState(false); //for loading screens
  const [allFilters, setAllFilters] = useState([]); // for all filters
  const [activeFilters, setActiveFilters] = useState([]); //for active filters

  useEffect(() => {
    //this works in place of the previous ComponentDidMount() function
    setIsLoading(true);
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/values/PieceData" +
        "?key=" +
        driveData.gkey
    )
      .then((response) => {
        if (response.status !== 200) {
          throw Error("issue fetching data from sheets API");
        }
        return response.json(); //convert API response to json format.
      })
      .then((data) => {
        const { formattedData, dataCategories, documentationStorage } = mapData(
          data.values
        );
        setPieceMap(formattedData);
        sortFilterData(dataCategories);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("oops another error", error);
      });
  }, []);

  const activePieces = React.useMemo(() => {
    console.log("ActivePieces triggered");
    if (pieceMap) {
      if (activeFilters.includes("18+")) {
        return pieceMap.filter((piece) =>
          activeFilters.includes(piece.Category)
        );
      }
      return pieceMap.filter(
        (piece) =>
          activeFilters.includes(piece.Category) && piece.NSFW === "FALSE"
      );
    }
    return [];
  }, [pieceMap, activeFilters]);

  //mapData returns an array of maps, each map is key Value pairs for one Piece/row of the spreadhseet.
  function mapData(dataValues) {
    const dataToMap = dataValues;
    const dataCategories = [];
    const documentationStorage = [];
    const dataKeys = dataToMap.shift(); //shift returns first element, also deletes it from array.

    const formattedData = [];
    dataValues.forEach((row) => {
      const piece = {};
      row.forEach((value, index) => {
        piece[dataKeys[index]] = value;
      });
      dataCategories.push(piece.Category);
      if (piece.Role === "Documentation") {
        documentationStorage.push(piece);
        return;
      }
      formattedData.push(piece);
    });

    return { formattedData, dataCategories, documentationStorage };
  }

  function sortFilterData(dataCategories) {
    setActiveFilters(dataCategories.filter(unique)); //want the page to start with all category fiters actve.
    dataCategories.push("18+"); //for my website I want mature content to be manually selected before its displayed.
    setAllFilters(dataCategories.filter(unique));
  }

  //we don't need a render function, just return what should render.
  return !isLoading ? ( //implement splash page with local assets to minimize loading.
    // boolean? () : () is the syntax for conditional rendering
    <div className="App">
      <Header />
      <Filters
        allFilters={allFilters}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <DisplayPieces pieceMap={activePieces} />
    </div>
  ) : (
    //we're gunna need to prolly skeleton load inside displayPieces
    <div> loading... please be patient </div>
  );
}

export default App;
