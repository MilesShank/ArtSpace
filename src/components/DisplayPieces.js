import React from "react";
import Piece from "./Piece";

const DisplayPieces = (props) => {
  const gDriveImgLink = "https://drive.google.com/uc?id=";
  //   const [showDetail, setShowDetail] = useState(null);

  function displayImages() {
    return props.pieceMap.map((piece) => {
      var imgKey = piece.get("ImgKey");
      return (
        <Piece
          url={gDriveImgLink + imgKey}
          pieceData={piece}
          key={piece.get("Key")}
        />
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
