import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "./CardDetailCar.css";

import x9Car from "../../asset_Xpeng/card_car/x9.png";
import g6Car from "../../asset_Xpeng/card_car/g6.png";
import p7Car from "../../asset_Xpeng/card_car/p7.png";
import iconDrive from "../../asset_Xpeng/icon_setir.png";

const CardDetailCar = () => {
  return (
    <div id="modelcar">
      <h1 className="title-card-detail">
        Large selection of car models from XPENG
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="parent-card-detail">
            <img src={x9Car} alt="XPENG X9" className="card-header" />
            <h2 className="title-card-car">XPENG X9</h2>
            <p className="detail-card-car">Ultra Smart Large Seven-seater</p>
            <p className="spec-card-car">
              702km CLTC | 16.2kWh (/100km) | +330km 10mnt (charge)
            </p>
            <div className="parent-price-available">
              <button className="available-btn">Available</button>
              <h2 className="price-car">$41,490</h2>
            </div>
            <a className="btn-test-drive" href="https://api.whatsapp.com/send?phone=62882006469274&text=Halo,%20Saya%20ingin%20Test%20Drive%20Xpeng%20type%20X9.">
              <img className="icon-test-drive" src={iconDrive} alt="" /> Test
              Drive
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="parent-card-detail">
            <img src={g6Car} alt="XPENG G6" className="card-header" />
            <h2 className="title-card-car">XPENG G6</h2>
            <p className="detail-card-car">Ultra Smart Coupe SUV</p>
            <p className="spec-card-car">
              Up to 550km | 4.1s accel | 10-80% in 20mnt (charge)
            </p>
            <div className="parent-price-available">
              <button className="available-btn">Available</button>
              <h2 className="price-car">$56,490</h2>
            </div>
            <a className="btn-test-drive" href="https://api.whatsapp.com/send?phone=62882006469274&text=Halo,%20Saya%20ingin%20Test%20Drive%20Xpeng%20type%20G6.">
              <img className="icon-test-drive" src={iconDrive} alt="" /> Test
              Drive
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="parent-card-detail">
            <img src={p7Car} alt="XPENG P7" className="card-header" />
            <h2 className="title-card-car">XPENG P7</h2>
            <p className="detail-card-car">Sleek. Intelligent. Adventurous</p>
            <p className="spec-card-car">
              Up to 576 km | 4.1s accel 10-80% in 20mnt (charge)
            </p>
            <div className="parent-price-available">
              <button className="coming-soon">Coming soon</button>
              <h2 className="price-car">$45,490</h2>
            </div>
            <a className="btn-test-drive" href="https://api.whatsapp.com/send?phone=62882006469274&text=Halo,%20Saya%20ingin%20Test%20Drive%20Xpeng%20type%20P7.">
              <img className="icon-test-drive" src={iconDrive} alt="" /> Test
              Drive
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="parent-card-detail">
            <img src={p7Car} alt="XPENG P7" className="card-header" />
            <h2 className="title-card-car">XPENG P7</h2>
            <p className="detail-card-car">Sleek. Intelligent. Adventurous</p>
            <p className="spec-card-car">
              Up to 576 km | 4.1s accel 10-80% in 20mnt (charge)
            </p>
            <div className="parent-price-available">
              <button className="coming-soon">Coming soon</button>
              <h2 className="price-car">$45,490</h2>
            </div>
            <a className="btn-test-drive" href="">
              <img className="icon-test-drive" src={iconDrive} alt="" /> Test
              Drive
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardDetailCar;
