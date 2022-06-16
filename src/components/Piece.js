import React from "react";

const Piece = (props) => {
  const imgStyle = { backgroundImage: `url(${props.url})` };
  console.log(props.pieceData);
  return (
    <div className="imageGridItem" key={props.pieceData.get("ID")}>
      <div style={imgStyle} className="imageWrapper" />
      <h4>{props.pieceData.get("Title")}</h4>
    </div>
  );
};

export default Piece;
