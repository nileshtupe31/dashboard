import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="steps-circle-things">
        <div className="overlap">
          <div className="circle">
            <div className="overlap-group">
              <img className="line" alt="Line" src="/img/line-1.svg" />
              <div className="ellipse" />
              <div className="text-wrapper">1</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="div">
              <img className="img" alt="Line" src="/img/line-2.svg" />
              <div className="ellipse-2" />
              <div className="text-wrapper-2">2</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="element-wrapper">
              <img className="element" alt="Element" src="/img/3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
