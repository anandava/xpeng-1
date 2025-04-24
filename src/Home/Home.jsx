import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Video from "../Components/Video/Video";
import AvailableCar from "../Components/AvailableCar/AvailableCar";
import "./Home.css";
import CardDetailCar from "../Components/CardDetailCar/CardDetailCar";
import X9 from "../Components/UniqueSpec/X9/X9";
import G6 from "../Components/UniqueSpec/G6/G6";
import SpecX9 from "../Components/Faq/X9/SpecX9";
import SpecG6 from "../Components/Faq/G6/SpecG6";
import App from "../Components/App/App";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Video />
      <div className="first-container">
        <AvailableCar />
      </div>
      <div className="seccond-container">
        <CardDetailCar />
      </div>
      <X9 />
      <SpecX9 />
      <G6 />
      <SpecG6 />
      <App />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
