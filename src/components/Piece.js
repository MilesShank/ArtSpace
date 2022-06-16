import React from "react";

const Piece = (props) => {
  return (
    <div>
      <img src={props.url}></img>
      {props.title}
    </div>
  );
};

export default Piece;
