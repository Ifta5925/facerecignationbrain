import React from "react";
import "./ImageLink.css";
const ImageLink = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">{"This magic Brain will detect in your pictures"}</p>
      <div className="center">
        <div className="form center pa3 br4 shadow-1">
          <input
            className="f4 pa2 w-70 center pa2 br4"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f3 link ph2 pv2 dib white bg-light-purple pa2 br4"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
export default ImageLink;
