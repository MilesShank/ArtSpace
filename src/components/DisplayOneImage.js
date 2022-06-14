import React from 'react';

const DisplayOneImage = props => {
    const gDriveImgLink = "https://drive.google.com/uc?id=";

    var imgKey = (props.pieces[1].get("ImgKey"));
    const displayImages = () =>{
        <div>
            
        </div>
        
    }
return(
    <div>
 
      DisplayOneImage rendered
      <img src={gDriveImgLink + imgKey}/>
      {/* {displayImages()} */}
    </div>)
  };

  export default DisplayOneImage;