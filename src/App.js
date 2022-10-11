import driveData from "./gdrive-data.json";
import { useEffect, useState } from "react";
import { unique } from "./utilityFunctions";
import React from "react";
import "./pieceFeed.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import WIPContainer from "./components/WipAlert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
function App() {
  const [pieceMap, setPieceMap] = useState(null); //where we'll store all pieces as formatted data
  const [isLoading, setIsLoading] = useState(false); //for loading screens
  const [allFilters, setAllFilters] = useState([]); // for all filters
  const [activeFilters, setActiveFilters] = useState([]); //for active filters
  const [projectTypes, setProjectTypes] = useState([]);

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

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1o41jm0d7qFoIJP8QEC8U70q6rvdLO2RSRnjyLOiy_qk/values/ProjectData" +
        "?key=" +
        driveData.gkey
    )
      .then((response) => {
        if (response.status !== 200) {
          throw Error("issue fetching project data from sheets API");
        }
        return response.json(); //convert API response to json format.
      })
      .then((projectData) => {
        const mappedProjectData = mapProjectData(projectData.values);
      });
  }, []);

  // activePieces returns all pieces within the activeFilters state.
  // it gets called whenever the state of pieceMap or activeFilters is changed.
  const activePieces = React.useMemo(() => {
    if (pieceMap) {
      if (activeFilters.includes("Nudity")) {
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
  function mapProjectData(projectDataValues) {
    console.log(projectDataValues);
    const projectsToMap = projectDataValues;
    const piecesToAssign = pieceMap;
    const projectCategories = [];
    const projectKeys = projectsToMap.shift();
    const formattedProjectData = [];

    projectDataValues.forEach((row) => {
      const project = {};
      const pieceArray = [];
      row.forEach((value, index) => {
        project[projectKeys[index]] = value;
      });
      projectCategories.push(project.Type);
      if (piecesToAssign) {
        project.pieceArray = pieceArray;
        piecesToAssign.forEach((piece) => {
          console.log(piece.Project, project.Name);
          if (piece.Project === project.Name) {
            project.pieceArray.push(piece);
          }
        });
      }
      formattedProjectData.push(project);
    });
    console.log(formattedProjectData);
    setProjectTypes(projectCategories.filter(unique));
  }
  function sortFilterData(dataCategories) {
    setActiveFilters(dataCategories.filter(unique)); //want the page to start with all category filters actve.
    dataCategories.push("Nudity"); //for my website I want content with nudity to be manually selected before its displayed.
    setAllFilters(dataCategories.filter(unique));
  }

  //we don't need a render function, just return what should render.
  return !isLoading ? ( //implement splash page with local assets to minimize loading.
    // boolean? () : () is the syntax for conditional rendering
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomeFeed
                  allFilters={allFilters}
                  activeFilters={activeFilters}
                  setActiveFilters={setActiveFilters}
                  pieceMap={activePieces}
                />
              }
            />
            <Route path="Projects" element={<Projects />} />
            <Route path="About/" element={<About />}></Route>
            <Route path="Shop" element={<WIPContainer />}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  ) : (
    //we're gunna need to prolly skeleton load inside displayPieces
    <div> loading... please be patient </div>
  );
}

export default App;
