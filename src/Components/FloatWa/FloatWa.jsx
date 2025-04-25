import React, { useState } from "react";
import "./FloatWa.css";

const FloatWa = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Menambahkan status untuk animasi penutupan modal

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false); // Reset animasi penutupan saat membuka modal
  };

  const closeModal = () => {
    setIsClosing(true); // Menandakan modal sedang ditutup
    setTimeout(() => {
      setIsModalOpen(false); // Setelah animasi selesai, baru sembunyikan modal
    }, 500); // Durasi yang sama dengan animasi fade-down
  };
  return (
    <div className="whatsapp-container">
      {/* Modal untuk memilih customer service */}
      {isModalOpen && (
        <div className={`modal ${isClosing ? "fade-down" : ""}`}>
          <div className="modal-content">
            <div className="parent-title-modal">
              <h3 className="text-pilih-cs">Pilih Customer Service</h3>
              <span onClick={closeModal} class="material-symbols-outlined close-icon">
                close
              </span>
            </div>
            <ul className="service-list">
              {/* X9 */}
              <a href="https://api.whatsapp.com/send?phone=62882006469274&text=Halo,%20Saya%20ingin%20tanya%20Xpeng%20type%20X9.">
                <li className="service-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt=""
                    className="img-float-wa"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    Xpeng X9
                    <br />
                    <span className="text-cs-edm">(Customer Service)</span>
                  </a>
                </li>
              </a>

              {/* G6 */}
              <a href="https://api.whatsapp.com/send?phone=62882006469274&text=Halo,%20Saya%20ingin%20tanya%20Xpeng%20type%20G6.">
                <li className="service-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt=""
                    className="img-float-wa"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    Xpeng G6
                    <br />
                    <span className="text-cs-edm">(Customer Service)</span>
                  </a>
                </li>
              </a>
            </ul>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="main-parent-float-wa">
        <label className="label-cta" htmlFor="">
          Chat With Us
        </label>
        <div className="whatsapp-float">
          <button className="whatsapp-btn" onClick={openModal}>
            <span class="material-symbols-outlined">tooltip</span>
            <span className="whatsapp-badge">1</span>{" "}
            {/* Badge dengan angka 1 */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatWa;
