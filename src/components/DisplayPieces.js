import { forEach } from 'ramda';
import React from 'react';
import Piece from './Piece';

const DisplayPieces = props => {
    const gDriveImgLink = "https://drive.google.com/uc?id=";

    
    const displayImages = () =>{
        return props.pieces.map(piece =>{
            var imgKey = (piece.get("ImgKey"));
            return <Piece url={gDriveImgLink + imgKey} title= {piece.get("Title")}/>;
        });
        // props.pieces.forEach(GenerateComponent);
           
        // function GenerateComponent(piece) {
        //     return(
        //     <div>fffdg
        //     <img src= {gDriveImgLink+piece.get("ImgKey")} />
        //     </div>
        //     )
        // }        
            
    }
return(
    <div>
 
      DisplayPieces rendered
      {displayImages()}
    </div>)
  };

  export default DisplayPieces;