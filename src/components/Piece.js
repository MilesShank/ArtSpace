import React from "react";
import { useEffect, useState } from "react";

function Piece({ pieceData, url }) {
  const [displayPieceModal, setDisplayPieceModal] = useState(false);
  const imgStyle = { backgroundImage: `url(${url})` };
  function handleClick(pieceData) {
    console.log(pieceData.Title, "working!");
    return <PieceModal pieceData={pieceData} url={url} />;
  }
  function displayProject() {
    return pieceData.Project !== null ? <h6>{pieceData.Project}</h6> : null;
  }
  return (
    <li
      className={pieceData.Category}
      adult={pieceData.NSFW}
      onClick={() => handleClick(pieceData)}
    >
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

function PieceModal(pieceData, url) {
  return <div className="TESTING">HHFDFHDHFDHFDFHG</div>;
}

export default Piece;
