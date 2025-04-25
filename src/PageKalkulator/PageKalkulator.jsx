import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import modelHero from "../asset_Xpeng/page_kalkulator/model.png";
import "./PageKalkulator.css";
import App from "../Components/App/App";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const PageKalkulator = () => {
  return (
    <React.Fragment>
      <Helmet>
        {/* Meta Basic */}
        <title>Kalkulator Simulasi Kredit - XPENG Motors Jakarta</title>
        <meta
          name="description"
          content="Hitung EMI pinjaman kendaraan dengan menggunakan Kalkulator EMI
            Pinjaman Kendaraan Xpeng. Anda harus memasukkan jumlah pinjaman,
            masa tenor, suku bunga, dan klik Ajukan Pinjaman untuk memeriksa EMI"
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
      <div className="container-hero-kalkulator">
        <div className="box-teks-kalkulator">
          <h1 className="title-kalkulator">Kalkulator Simulasi Kredit</h1>
          <p className="deskripsi-kalkulator">
            Hitung EMI pinjaman kendaraan dengan menggunakan Kalkulator EMI
            Pinjaman Kendaraan Xpeng. Anda harus memasukkan jumlah pinjaman,
            masa tenor, suku bunga, dan klik Ajukan Pinjaman untuk memeriksa EMI
          </p>
          <div className="parent-btn-kalkulator">
            <a className="btn-kalkulator" href="#">
              Coba Kalkulator
            </a>
          </div>
        </div>
        <img className="model-hero-kalkulator" src={modelHero} alt="" />
      </div>
      <App />
      <Footer />
    </React.Fragment>
  );
};

export default PageKalkulator;
