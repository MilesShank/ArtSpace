import React from "react";
import { useState } from "react";
import { Overlay, Classes } from "@blueprintjs/core";
import "../pieceDetail.css";
function Piece({ pieceData, url }) {
  const imgStyle = { backgroundImage: `url(${url})` };
  const [isOpen, setIsOpen] = useState(false);
  function toggleOverlay() {
    setIsOpen(!isOpen);
  }

  function handleClick() {
    if (!isOpen) {
      toggleOverlay();
    }
  }

  function displayProject() {
    return pieceData.Project !== null ? <h6>{pieceData.Project}</h6> : null;
  }

  return (
    <li
      genre={pieceData.Category}
      adult={pieceData.NSFW}
      onClick={() => handleClick(pieceData)}
    >
      <div className="imageGridItem" key={pieceData.Key}>
        <div style={imgStyle} className="imageWrapper" />
        <div className="feedOverlay">
          <h4>{pieceData.Title}</h4>
          <div>{displayProject()}</div>
        </div>
      </div>
      <div>
        <Overlay
          isOpen={isOpen}
          onClose={toggleOverlay}
          canOutsideClickClose={true}
          className={Classes.OVERLAY_SCROLL_CONTAINER}
          hasBackdrop={true}
        >
          <div className="closeButton" onClick={toggleOverlay}>
            x
          </div>
          <div className="pieceDetail">
            <container className="pieceImageContainer">
              <img
                src={url}
                className="pieceDetailImage"
                alt={pieceData.AltText}
              />
            </container>
            <container className="pieceInfoContainer">
              <DisplayPieceInfo pieceData={pieceData} />
            </container>
          </div>
        </Overlay>
      </div>
    </li>
  );

  function DisplayPieceInfo() {
    return (
      <div className="pieceDetailInfo">
        <h6>{pieceData.Title}</h6>
        <ul>
          <p>{pieceData.Caption}</p>
          <br />
          <li>{pieceData.Category}</li> <br />
          <li>{pieceData.Project}</li>
          <br />
          <li>{pieceData.DateCreated}</li>
          <br />
          <li>{pieceData.MaterialsUsed}</li>
          <br />
        </ul>
      </div>
    );
  }
}

export default Piece;
