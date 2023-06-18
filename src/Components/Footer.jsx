import React from "react";
import ESGULLogo from "../Assets/img/ESGUL.png";
import BSILogo from "../Assets/img/BSI.png";
import DicodingLogo from "../Assets/img/dicoding.png";
import KampusMerdekaLogo from "../Assets/img/kampus-merdeka.png";
import "../Styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__section-one">
        <h3>Tentang MariMasak</h3>
        <div className="footer-description">
          <p>MariMasak adalah website</p>
          <p>yang menyajikan resep</p>
          <p>makanan khas dari pulau</p>
          <p>Sumatera.</p>
        </div>
      </div>
      <div className="footer-wrapper__section-two">
        <div className="footer-wrapper__section-two__columns">
          <h3>Navigasi</h3>
          <a href="/">Beranda</a>
          <a href="about">Tentang</a>
          <a href="keranjang">Keranjang</a>
        </div>
        <div className="footer-wrapper__section-two__columns">
          <h3>Kontak Kami</h3>
          <span>
            <a
              href="https://www.linkedin.com/in/dio-hartawan-arnas-b2239a279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dio
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/arif-wibisono-526424279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arif
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/muhammad-rifki-hilman-1a3421192/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rifki
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/indah-warohmah-740bb3262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indah
            </a>
          </span>
        </div>
        <div className="footer-wrapper__section-two__columns">
          <h3>Didukung Oleh</h3>
          <div className="logo-container">
            <img src={ESGULLogo} alt="Universitas Esa Unggul" />
            <img src={BSILogo} alt="Universitas Bina Sarana Informatika" />
          </div>
          <div className="logo-container">
            <img src={DicodingLogo} alt="Dicoding" />
            <img src={KampusMerdekaLogo} alt="Kampus Merdeka" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;