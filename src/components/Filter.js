import React from "react";
//we're going to do an API call to return all the unique values from the category column.
const Filter = (props) => {
  return (
    <div className="imageGridItem" key={props.pieceData.get("ID")}>
      <div style={imgStyle} className="imageWrapper" />
      <h4>{props.pieceData.get("Title")}</h4>
      <h4>NSFW</h4>
    </div>
  );
};

export default Filter;
