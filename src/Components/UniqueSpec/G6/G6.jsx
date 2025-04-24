import React from "react";
import "./G6.css";
import img1 from "../../../asset_Xpeng/spec_car_g6/1.png";
import img2 from "../../../asset_Xpeng/spec_car_g6/2.png";
import img3 from "../../../asset_Xpeng/spec_car_g6/3.png";
import img4 from "../../../asset_Xpeng/spec_car_g6/4.png";
import img5 from "../../../asset_Xpeng/spec_car_g6/5.png";
import img6 from "../../../asset_Xpeng/spec_car_g6/6.png";

const G6 = () => {
  return (
    <React.Fragment>
      <div className="container-unique-2">
        <h1 className="title-unique-spec-car">
          Unique Specifications of XPENG G6 car
        </h1>
        <div className="parent-img-unique">
          <div className="img-wrapper">
            <img src={img1} alt="" className="img-unique" />
            <p className="overlay-text">Power Up with Precision</p>
          </div>
          <div className="img-wrapper">
            <img src={img2} alt="" className="img-unique" />
            <p className="overlay-text">Surrounding Comfort Seats</p>
          </div>
          <div className="img-wrapper">
            <img src={img3} alt="" className="img-unique" />
            <p className="overlay-text">More than Just a Tool from A to B</p>
          </div>
          <div className="img-wrapper">
            <img src={img4} alt="" className="img-unique" />
            <p className="overlay-text">Unparalleled Sound from XOPERA </p>
          </div>
          <div className="img-wrapper">
            <img src={img5} alt="" className="img-unique" />
            <p className="overlay-text">
              Easy to operate, user-friendly tools{" "}
            </p>
          </div>
          <div className="img-wrapper">
            <img src={img6} alt="" className="img-unique" />
            <p className="overlay-text">
              Smart car, advance control with your phone{" "}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default G6;
