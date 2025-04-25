import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // tambahkan autoplay css

import "./AvailableCar.css";
import { Autoplay } from "swiper/modules"; // tambahkan Autoplay

import x9Type from "../../asset_Xpeng/car type_x9.png";
import g6Type from "../../asset_Xpeng/car type_g6.png";

const AvailableCar = () => {
  return (
    <div className="container-available-car">
      <h1 className="title-available-car">Available Car Type</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]} // pastikan Autoplay di modules
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={x9Type} alt="X9 Type" className="img-available-card" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={g6Type} alt="G6 Type" className="img-available-card" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AvailableCar;
