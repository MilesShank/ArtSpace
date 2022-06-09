import React, { useEffect, useState } from "react";
import * as R from 'ramda'
import "./gDriveTestComponent.css";  
const gDriveImgLink = "https://drive.google.com/uc?id=";
var imgData;
function ArtSpaceDataLoader(data) {

const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };




  useEffect(() => {
    loadData();
  });


  async function loadData() {
      fetch("https://eoimtcqaziwadc2.m.pipedream.net/", requestOptions)
      .then(response => response.json())
      .then(responseJson => formatData(responseJson))
      .catch(error => console.log('error', error));
      };
  }

  function formatData(responseJson){
    imgData = responseJson;
    console.log(imgData);
    console.
    return(
      <div>
        <img src = {gDriveImgLink}{...responseJson[1[1]]}/>

      </div>
    );
  } 
//   function checkFormat(url) {
//     return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
//   }

//   function ModalView(props) {
//     return (
//       <div>
//         <div id="modal-container" className="modal">
//           <span className="close">&times;</span>
//               <div>{errorCode}</div>
//           <img className="modal-content" id="curr-modal" alt="" />
//           <div id="caption" />
//         </div>
//       </div>
//     );
//   }

//   function showModal(imgId) {
//     const modal = document.getElementById("modal-container");
//     const modalImg = document.getElementById("curr-modal");
//     modalImg.src = imgId;
//     modal.style.display = "block";
//     const span = document.getElementsByClassName("close")[0];
//     span.onclick = function () {
//       modal.style.display = "none";
//     };
//   }

//   const renderImages = (className, id, exclude, item ,i) => {
//     return (
//       <>
//         {!exclude && (
//           <img
//             style={style}
//             className={
//               (clickable ? " gd-pointer " : "") +
//               (" gd-img ") +
//               (hover ? " gd-pointer gd-hover " : "") + className
//             }
//             onClick={() => {
//               modal && showModal(GOOGLE_DRIVE_IMG_URL + item.id);
//             }}
//             src={GOOGLE_DRIVE_IMG_URL + item.id}
//             id={id ? id : null}
//             key={i}
//             alt={item.title}
//           />
//         )}
//       </>
//     )

//   }

//   const renderMain = (className, id, exclude, href, target, item, i) => {
//     if (!R.isEmpty(href)) {
//         console.log("isEmpty") //DELETE LATER
//       return (
//     <div>
//         <a
//           href={href}
//           target={target}
//         >
//           {renderImages(className, id, exclude, item, i)}

//         </a>
//     </div>
//       )
//     }
//     return (
//       renderImages(className, id, exclude, item, i)
//     )
//   }

//   return (
//     <div>
//       <h2>{showHeader && header}</h2>

//       {modal && <ModalView />}

//       {imgIds &&
//         imgIds.map((item, i) => {
//           const title = R.propOr("", "title", item)
//           if (checkFormat(item.title)) {
//             const className = R.propOr("", title, classNames)
//             const id = R.propOr("", title, ids)
//             const exclude = R.propOr("", title, excludes);
//             const href = !modal && clickable ? GOOGLE_DRIVE_IMG_URL + item.id : ""
//             const target = newWindow ? "_blank" : ""
//             return(renderMain(className, id, exclude, href, target, item, i))
//           }
//         }}
//     </div>
//   );

export default ArtSpaceDataLoader;