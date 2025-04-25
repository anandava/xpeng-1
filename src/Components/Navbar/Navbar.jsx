import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../asset_Xpeng/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => goToHome()}>
          <img className="nav-logo" src={logo} alt="" />
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("city")}
            >
              City{" "}
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div
              className={`dropdown-content ${
                openDropdown === "city" ? "show" : ""
              }`}
            >
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
            <button
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("model")}
            >
              Model{" "}
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div
              className={`dropdown-content ${
                openDropdown === "model" ? "show" : ""
              }`}
            >
              <a href="#modelcar" className="dropdown-link">
                X9
              </a>
              <a href="#modelcar" className="dropdown-link">
                G6
              </a>
              <a href="#modelcar" className="dropdown-link">
                G9
              </a>
              <a href="#modelcar" className="dropdown-link">
                P7
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("spec")}
            >
              Spec{" "}
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div
              className={`dropdown-content ${
                openDropdown === "spec" ? "show" : ""
              }`}
            >
              <a href="#x9-specification" className="dropdown-link">
                X9
              </a>
              <a href="#g6-specification" className="dropdown-link">
                G6
              </a>
            </div>
          </div>

          <Link className="nav-link" to="/simulasi-kredit">
            Best Price
          </Link>

          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => handleDropdownToggle("language")}
            >
              <span class="material-symbols-outlined language-icon">
                language
              </span>
            </button>
            <div
              className={`dropdown-content ${
                openDropdown === "language" ? "show" : ""
              }`}
            >
              <a href="#" className="dropdown-link">
                Indonesia
              </a>
              <a href="#" className="dropdown-link">
                English
              </a>
              <a href="#" className="dropdown-link">
                中国
              </a>
            </div>
          </div>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </React.Fragment>
  );
};

export default Navbar;
