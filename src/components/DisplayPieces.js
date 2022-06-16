import React from "react";
import Piece from "./Piece";

const DisplayPieces = (props) => {
  const gDriveImgLink = "https://drive.google.com/uc?id=";

  const displayImages = () => {
    return props.pieceMap.map((piece) => {
      var imgKey = piece.get("ImgKey");
      return <Piece url={gDriveImgLink + imgKey} title={piece.get("Title")} />;
    });
  };

  return (
    <div>
      DisplayPieces rendered
      {displayImages()}
    </div>
  );
};

export default DisplayPieces;
