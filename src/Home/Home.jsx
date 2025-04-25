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
import FloatWa from "../Components/FloatWa/FloatWa";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        {/* Meta Basic */}
        <title>XPENG - Smart Electric Vehicles, SUVs & MPVs</title>
        <meta
          name="description"
          content="XPENG's electric vehicles designed for performance, safety, and sustainability. Explore our range of smart EVs, advanced technology, and commitment to a greener future."
        />
        <meta
          name="keywords"
          content="XPENG X9, electric MPV, car specs, XPENG car, X9 features"
        />
        <meta name="author" content="XPENG Motors" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://xpengjakarta.com/" />
      </Helmet>

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
      <FloatWa />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
