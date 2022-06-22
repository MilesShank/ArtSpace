import React from "react";
import loading from "../localAssets/loading.gif";
import { useEffect, useState } from "react";
import { propSatisfies } from "ramda";

function Piece(props) {
  const imgStyle = { backgroundImage: `url(${props.url})` };

  function displayProject() {
    return props.pieceData.get("Project") !== null ? (
      <h6>{props.pieceData.get("Project")}</h6>
    ) : null;
  }
  return (
    <li>
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
