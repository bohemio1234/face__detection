import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import Brain from "./brain.png";

const Logo = () => {
  return (
    <Tilt style={{ width: "100px" }}>
      <div style={{ width: "100px", marginTop: "-52px", marginLeft: "50px" }}>
        <img src={Brain} alt="Brain Logo"></img>
      </div>
    </Tilt>
  );
};

export default Logo;
