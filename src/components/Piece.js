import React from "react";
import { useEffect, useState } from "react";
import { Button, Overlay } from "@blueprintjs/core";
function Piece({ pieceData, url }) {
  const [displayPieceModal, setDisplayPieceModal] = useState(false);
  const imgStyle = { backgroundImage: `url(${url})` };
  const [isOpen, setIsOpen] = useState(false);

  function toggleOverlay() {
    setIsOpen(!isOpen);
  }
  function handleClick(pieceData) {
    console.log(pieceData.Title, "working!");
    toggleOverlay();
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
      <div>
        <Overlay isOpen={isOpen} onClose={toggleOverlay}>
          <div className="pieceDetail">
            <img src={url} className="pieceDetailImage" />
          </div>
        </Overlay>
      </div>
    </li>
  );
}

function PieceModal(pieceData, url) {
  return <div className="TESTING">HHFDFHDHFDHFDFHG</div>;
}

export default Piece;
