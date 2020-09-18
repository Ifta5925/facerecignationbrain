import React from "react";
import Tilt from "react-tilt";
import logo from './logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className=" ma4 mt0 ">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 20 }}
        style={{ height: 70, width: 150 }}
      >
        <div className="Tilt-inner pa2"><img style={{paddingTop: '1px', paddingBottom: '1px'}} alt ='logo' src={logo} ></img> </div>
      </Tilt>
    </div>
  );
};
export default Logo;
