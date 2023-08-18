import React from "react";
import { Rectangle } from "../../components/Rectangle";
import "./style.css";

export const GooglePixel = () => {
  return (
    <div className="google-pixel">
      <div className="div">
        <div className="frame">
          <img className="barclays-PLC" alt="Barclays PLC" src="/img/barclays-plc-1.png" />
        </div>
        <div className="text-wrapper-2">Your accounts</div>
        <div className="overlap">
          <div className="ellipse" />
          <div className="text-wrapper-3">Suggested for you</div>
          <div className="overlap-2">
            <Rectangle className="rectangle-1" />
            <div className="current-balance">
              Current balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Available credit
            </div>
            <img className="line" alt="Line" src="/img/line-1.svg" />
            <div className="text-wrapper-4">Gap Mastercard</div>
            <img
              className="img"
              alt="Img"
              src="/img/da-8e-65379-4fe-3dfbb-8-7e-3ba-5b-718-3df-5e-5f-8c-82242-2fcfb-7217078844-7aec-4b-8.png"
            />
          </div>
          <div className="overlap-3">
            <div className="rectangle-2" />
            <div className="text-wrapper-5">Manage Alerts</div>
            <p className="p">Set up the messages you need to stay on top of your account.</p>
            <img className="line-2" alt="Line" src="/img/line-2.svg" />
            <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-11.png" />
          </div>
          <div className="ellipse-2" />
          <div className="ellipse-3" />
        </div>
        <div className="overlap-4">
          <div className="overlap-5">
            <div className="overlap-6">
              <div className="text-wrapper-6">Payments</div>
              <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-7.png" />
              <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-8.png" />
              <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-9.png" />
              <div className="text-wrapper-7">Rewards</div>
            </div>
            <div className="text-wrapper-8">Offers</div>
          </div>
          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-6.png" />
          <div className="text-wrapper-9">Home</div>
          <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-10.png" />
          <div className="text-wrapper-10">Profile</div>
        </div>
      </div>
    </div>
  );
};
