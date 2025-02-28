import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageurl, box }) => {
  return (
    // <div className='center ma'>
    //     <div className='absolute mt2'>
    //         <img id='inputimage' alt='' src={imageurl} width='500px' heigh='auto'/>
    //         <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    //     </div>
    // </div>

    <div className="container d-flex justify-content-center mt-3">
      <div className="position-relative">
        <img
          id="inputimage"
          alt=""
          src={imageurl}
          className="img-fluid"
        />
        <div
          className="bounding-box position-absolute"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
