import React from "react";
import Piece from "./Piece";

const DisplayPieces = (props) => {
  const gDriveImgLink = "https://drive.google.com/uc?id=";
  //   const [showDetail, setShowDetail] = useState(null);

  const displayImages = () => {
    return props.pieceMap.map((piece) => {
      console.log(piece);
      var imgKey = piece.get("ImgKey");
      if (piece.get("Role") != "Documentation") {
        //we dont want documentation in the main feed
        return <Piece url={gDriveImgLink + imgKey} pieceData={piece} />;
      }
    });
  };

  return <div>{displayImages()}</div>;
};

export default DisplayPieces;
