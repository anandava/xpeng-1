import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import modelHero from "../asset_Xpeng/page_kalkulator/model.png";
import "./PageKalkulator.css";
import App from "../Components/App/App";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const PageKalkulator = () => {
  const daftarMobil = [
    { nama: 'Toyota Calya 1.2 E MT STD', harga: 169_600_000 },
    { nama: 'Honda Brio Satya S MT', harga: 165_000_000 },
    { nama: 'Daihatsu Sigra 1.2 R AT', harga: 180_000_000 },
    { nama: 'Suzuki Ertiga GL MT', harga: 235_000_000 },
  ];

  const [mobilTerpilih, setMobilTerpilih] = useState(daftarMobil[0]);
  const [uangMukaPersen, setUangMukaPersen] = useState(20);
  const [bunga, setBunga] = useState(8.6);
  const [tenor, setTenor] = useState(3);

  const hargaMobil = mobilTerpilih.harga;
  const uangMuka = (uangMukaPersen / 100) * hargaMobil;
  const jumlahPinjaman = hargaMobil - uangMuka;
  const totalBunga = (jumlahPinjaman * (bunga / 100)) * tenor;
  const totalBayar = jumlahPinjaman + totalBunga;
  const cicilanBulanan = totalBayar / (tenor * 12);

  const handleMobilChange = (e) => {
    const mobilDipilih = daftarMobil.find(mobil => mobil.nama === e.target.value);
    setMobilTerpilih(mobilDipilih);
  };

  const handleUangMukaChange = (e) => {
    setUangMukaPersen(e.target.value);
  };

  const handleBungaChange = (e) => {
    setBunga(e.target.value);
  };

  const handleTenorChange = (tahun) => {
    setTenor(tahun);
  };

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
      <div className="flex-container">
      <div className="container-kalkulator">
        {/* Dropdown Mobil */}
        <div>
          <select 
            value={mobilTerpilih.nama}
            onChange={handleMobilChange}
            className="mobil-select"
          >
            {daftarMobil.map((mobil) => (
              <option key={mobil.nama} value={mobil.nama}>
                {mobil.nama} - Rp {mobil.harga.toLocaleString('id-ID')}
              </option>
            ))}
          </select>
        </div>

        {/* Harga Mobil */}
        <div>
          <p className="">
            Harga Mobil: <strong>Rp {hargaMobil.toLocaleString('id-ID')}</strong>
          </p>
        </div>

        {/* Uang Muka */}
        <div className="slider-group">
          <div className="label-container">
            <label>Uang Muka</label>
            <div className="value-box">{uangMukaPersen}%</div>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            value={uangMukaPersen}
            onChange={(e) => setUangMukaPersen(e.target.value)}
            className="styled-slider"
          />
          <div className="range-labels">
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40</span>
            <span>50</span>
            <span>60</span>
          </div>
        </div>


        {/* Suku Bunga */}
        <div className="slider-group">
          <div className="label-container">
            <label>Suku Bunga</label>
            <div className="value-box">{bunga}%</div>
          </div>
          <input
            type="range"
            min="6"
            max="36"
            step="0.1"
            value={bunga}
            onChange={(e) => setBunga(e.target.value)}
            className="styled-slider"
          />
          <div className="range-labels">
            <span>6</span>
            <span>10</span>
            <span>14</span>
            <span>17</span>
            <span>21</span>
            <span>25</span>
            <span>29</span>
            <span>32</span>
            <span>36</span>
          </div>
        </div>
      

        {/* Tenor Pinjaman */}
        <div className="tenor-container">
          <label>Tenor Pinjaman:</label>
          <div className="tenor-grid">
            {[1,2,3,4,5,6,7,8,9,10].map((tahun) => (
              <button 
                key={tahun}
                onClick={() => handleTenorChange(tahun)}
                className={`tenor-button ${tenor === tahun ? 'active' : ''}`}
              >
                {tahun} Tahun
              </button>
            ))}
          </div>
        </div>
        </div>

        <div>
          {/* Hasil Simulasi */}
          <div className="container-kalkulator">
            <p><strong>Uang Muka:</strong> Rp {uangMuka.toLocaleString('id-ID')}</p>
            <p><strong>Jumlah Pinjaman:</strong> Rp {jumlahPinjaman.toLocaleString('id-ID')}</p>
            <p>
              Cicilan Bulanan: Rp {cicilanBulanan.toFixed(2).toLocaleString('id-ID')}
            </p>
            <button>Ajukan Pinjaman</button>
          </div>
        </div>
      </div>
      <App />
      <Footer />
    </React.Fragment>
  );
};

export default PageKalkulator;
