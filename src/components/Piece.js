import React from "react";
import { useEffect, useState } from "react";

function Piece({ pieceData, url }) {
  const imgStyle = { backgroundImage: `url(${url})` };

  function displayProject() {
    return pieceData.Project !== null ? <h6>{pieceData.Project}</h6> : null;
  }
  return (
    <li className={pieceData.Category} adult={pieceData.NSFW}>
      <div className="imageGridItem" key={pieceData.Key}>
        <div style={imgStyle} className="imageWrapper" />
        <div className="overlay">
          <h4>{pieceData.Title}</h4>
          <div>{displayProject()}</div>
        </div>
      </div>
    </li>
  );
}

export default Piece;
