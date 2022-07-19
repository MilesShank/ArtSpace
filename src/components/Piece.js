import React from "react";
import { useState } from "react";
import { Overlay, Classes } from "@blueprintjs/core";
function Piece({ pieceData, url }) {
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
        <Overlay
          isOpen={isOpen}
          onClose={toggleOverlay}
          className={Classes.OVERLAY_SCROLL_CONTAINER}
        >
          <div className="pieceDetail">
            <img
              src={url}
              className="pieceDetailImage"
              alt={pieceData.AltText}
            />
            <div className="pieceDetailInfo">
              <span>{pieceData.Caption}</span>
              <li>{pieceData.Title}</li>
              <li>{pieceData.Category}</li>
              <li>{pieceData.Project}</li>
              <li>{pieceData.DateCreated}</li>
              <li>{pieceData.MaterialsUsed}</li>
            </div>
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
