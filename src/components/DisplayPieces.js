import React from "react";
import Piece from "./Piece";

const DisplayPieces = (props) => {
  const gDriveImgLink = "https://drive.google.com/uc?id=";
  //   const [showDetail, setShowDetail] = useState(null);

  const displayImages = () => {
    return props.pieceMap.map((piece) => {
      var imgKey = piece.get("ImgKey");
      return piece.get("Role") !== "Documentation" ? (
        //we dont want documentation in the main feed
        <Piece
          url={gDriveImgLink + imgKey}
          pieceData={piece}
          key={piece.get("Key")}
        />
      ) : null;
    });
  };

  return <div className="pieceContainer">{displayImages()}</div>;
};

export default DisplayPieces;
