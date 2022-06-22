import React from "react";
import { useEffect, useState } from "react";

function Piece(props) {
  const imgStyle = { backgroundImage: `url(${props.url})` };

  function displayProject() {
    return props.pieceData.get("Project") !== null ? (
      <h6>{props.pieceData.get("Project")}</h6>
    ) : null;
  }
  return (
    <li
      className={props.pieceData.get("Category")}
      adult={props.pieceData.get("NSFW")}
    >
      <div className="imageGridItem" key={props.pieceData.get("Key")}>
        <div style={imgStyle} className="imageWrapper" />
        <div className="overlay">
          <h4>{props.pieceData.get("Title")}</h4>
          <div>{displayProject()}</div>
        </div>
      </div>
    </li>
  );
}

export default Piece;
