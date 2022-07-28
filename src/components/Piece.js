import React from "react";
import { useState } from "react";
import { Overlay, Classes, Button } from "@blueprintjs/core";
function Piece({ pieceData, url }) {
  const imgStyle = { backgroundImage: `url(${url})` };
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);

  function toggleOverlay() {
    setIsOpen(!isOpen);
  }
  function toggleInfo(pieceData) {
    setIsInfoDisplayed(!isInfoDisplayed);
    DisplayPieceInfo(pieceData);
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
          <Button className="closeButton" onClick={toggleOverlay}>
            X
          </Button>
          <div className="pieceDetail">
            <container className="pieceImageContainer">
              <img
                src={url}
                className="pieceDetailImage"
                alt={pieceData.AltText}
              />
            </container>
            <container className="pieceInfoContainer">
              <Button className="infoButton" onClick={toggleInfo}>
                Info
              </Button>
              {isInfoDisplayed ? (
                <DisplayPieceInfo pieceData={pieceData} />
              ) : null}
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
          <span>{pieceData.Caption}</span>
          <li>{pieceData.Category}</li>
          <li>{pieceData.Project}</li>
          <li>{pieceData.DateCreated}</li>
          <li>{pieceData.MaterialsUsed}</li>
        </ul>
      </div>
    );
  }
}

export default Piece;
