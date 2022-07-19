import React from "react";
import { useState } from "react";
import { Overlay, Classes, Button, Drawer } from "@blueprintjs/core";
function Piece({ pieceData, url }) {
  const imgStyle = { backgroundImage: `url(${url})` };
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);

  function toggleOverlay() {
    setIsOpen(!isOpen);
    console.log("toggled overlay");
  }
  function toggleInfo(pieceData) {
    setIsInfoDisplayed(!isInfoDisplayed);
    DisplayPieceInfo(pieceData);
  }

  function handleClick() {
    if (!isOpen) {
      toggleOverlay();
    }
    console.log("handled click");
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
          <Button onClick={toggleOverlay}>X</Button>
          <div className="pieceDetail">
            <img
              src={url}
              className="pieceDetailImage"
              alt={pieceData.AltText}
            />
            <Button onClick={toggleInfo}>Info</Button>
            {isInfoDisplayed ? <DisplayPieceInfo /> : null}
          </div>
        </Overlay>
      </div>
    </li>
  );

  function DisplayPieceInfo(pieceData) {
    return (
      <div className="pieceDetailInfo">
        <span>{pieceData.Caption}</span>
        <li>{pieceData.Title}</li>
        <li>{pieceData.Category}</li>
        <li>{pieceData.Project}</li>
        <li>{pieceData.DateCreated}</li>
        <li>{pieceData.MaterialsUsed}</li>
      </div>
    );
  }
}

export default Piece;
