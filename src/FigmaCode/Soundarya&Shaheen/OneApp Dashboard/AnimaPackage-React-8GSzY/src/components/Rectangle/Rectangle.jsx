/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Rectangle = ({ className }) => {
  return (
    <div className={`rectangle ${className}`}>
      <div className="overlap-group">
        <div className="text-wrapper">$0.00</div>
        <div className="element">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2500.00
        </div>
      </div>
    </div>
  );
};
