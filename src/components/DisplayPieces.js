import React from "react";
import Piece from "./Piece";

const DisplayPieces = ({ pieceMap }) => {
  const gDriveImgLink = "https://drive.google.com/uc?id=";

  function displayImages() {
    return pieceMap.map((piece) => {
      var imgKey = piece.ImgKey;
      return (
        <Piece url={gDriveImgLink + imgKey} pieceData={piece} key={piece.Key} />
      );
    });
  }

  return (
    <div className="feedContainer">
      {" "}
      <ul className="pieceContainer">{displayImages()}</ul>{" "}
    </div>
  );
};

export default DisplayPieces;
