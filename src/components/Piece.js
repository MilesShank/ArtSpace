import React from 'react';

const Piece = (props) => {
    return(
        <div className= "w-80">
        <img src= {props.url} className= "block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" ></img>
        {props.title}
        </div>
    )
}

export default Piece