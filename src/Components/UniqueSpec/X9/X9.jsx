import React from "react";
import "./X9.css";
import img1 from "../../../asset_Xpeng/spec_car_x9/1.png";
import img2 from "../../../asset_Xpeng/spec_car_x9/2.png";
import img3 from "../../../asset_Xpeng/spec_car_x9/3.png";
import img4 from "../../../asset_Xpeng/spec_car_x9/4.png";
import img5 from "../../../asset_Xpeng/spec_car_x9/5.png";
import img6 from "../../../asset_Xpeng/spec_car_x9/6.png";
import img7 from "../../../asset_Xpeng/spec_car_x9/7.png";
import img8 from "../../../asset_Xpeng/spec_car_x9/delapan.png";

const X9 = () => {
  return (
    <React.Fragment>
      <div className="container-unique">
        <h1 className="title-unique-spec-car">
          Unique Specifications of XPENG X9 car
        </h1>
        <div className="parent-img-unique">
          <div className="img-wrapper">
            <img src={img1} alt="" className="img-unique" />
            <p className="overlay-text">
              Industry-first hot & cold refrigerator with electric door
            </p>
          </div>
          <div className="img-wrapper">
            <img src={img2} alt="" className="img-unique" />
            <p className="overlay-text">
              Interation between Front and Rear Screens
            </p>
          </div>
          <div className="img-wrapper">
            <img src={img3} alt="" className="img-unique" />
            <p className="overlay-text">
              Industry's first wrap-around central AC featuring quiet and gentle
              breeze
            </p>
          </div>
          <div className="img-wrapper">
            <img src={img4} alt="" className="img-unique" />
            <p className="overlay-text">Real wood decorations </p>
          </div>
          <div className="img-wrapper">
            <img src={img5} alt="" className="img-unique" />
            <p className="overlay-text">Cosmic ambient light</p>
          </div>
          <div className="img-wrapper">
            <img src={img6} alt="" className="img-unique" />
            <p className="overlay-text">23-speaker Xopera audio system</p>
          </div>
        </div>

        <div className="parent-img-unique-2">
          <div className="img-wrapper-2">
            <img src={img7} alt="" className="img-unique-2" />
            <p className="overlay-text-2">Cozy space - Kids Will be love it</p>
          </div>
          <div className="img-wrapper-2">
            <img src={img8} alt="" className="img-unique-2" />
            <p className="overlay-text-2">More space - More comfortable</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default X9;
