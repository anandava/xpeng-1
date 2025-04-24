import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../asset_Xpeng/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
          className="nav-logo"
            src={logo}
            alt=""
          />
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <div className="dropdown">
            <button className="dropdown-toggle">
              City{" "}
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div className="dropdown-content">
              <a href="#" className="dropdown-link">
                Jakarta
              </a>
              <a href="#" className="dropdown-link">
                Bogor
              </a>
              <a href="#" className="dropdown-link">
                Depok
              </a>
              <a href="#" className="dropdown-link">
                Tangerang
              </a>
              <a href="#" className="dropdown-link">
                Tangerang Selatan
              </a>
              <a href="#" className="dropdown-link">
                Bekasi
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-toggle">
              Model{" "}
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div className="dropdown-content">
              <a href="#" className="dropdown-link">
                X9
              </a>
              <a href="#" className="dropdown-link">
                G6
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-toggle">
              Spec{" "}
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div className="dropdown-content">
              <a href="#" className="dropdown-link">
                X9
              </a>
              <a href="#" className="dropdown-link">
                G6
              </a>
            </div>
          </div>

          <a href="#" className="nav-link">
            Best Price
          </a>
          <div className="dropdown">
            <button className="dropdown-toggle language-icon">
              <span class="material-symbols-outlined">language</span>
            </button>
            <div className="dropdown-content">
              <a href="#" className="dropdown-link">
                🇮🇩 Indonesia
              </a>
              <a href="#" className="dropdown-link">
                🇬🇧 English
              </a>
              <a href="#" className="dropdown-link">
                🇯🇵 日本語
              </a>
            </div>
          </div>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
