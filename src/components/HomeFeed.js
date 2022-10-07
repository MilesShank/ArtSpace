import React from "react";
import DisplayPieces from "../components/DisplayPieces";
import Filters from "../components/DisplayFilters";
import "../HomeFeed.css";
const HomeFeed = ({
  activeFilters,
  allFilters,
  setActiveFilters,
  pieceMap,
}) => {
  return (
    <div className="HomeFeed">
      <Filters
        allFilters={allFilters}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <DisplayPieces pieceMap={pieceMap} />
    </div>
  );
};

export default HomeFeed;
