import React from "react";
import "../Styles/AboutUsPage.scss";
import masakguysImage from "../Assets/img/masakguys.jpeg";
import dioImage from "../Assets/img/dio.jpeg";
import arifImage from "../Assets/img/arif.jpeg";
import rifkyImage from "../Assets/img/rifky.jpeg";
import indahImage from "../Assets/img/indah.jpeg";

const AboutUsPage = () => {
  const dioGithubUrl = "https://github.com/diohrtwn";
  const arifGithubUrl = "https://github.com/arifwibiii";
  const rifkyGithubUrl = "https://github.com/rifkyhilman";
  const indahGithubUrl = "https://github.com/indaahw";

  return (
    <div className="about-us-page">
      <div className="about-section">
        <div className="about-content">
          <h1>Tentang MariMasak</h1>
          <p>
            MariMasak adalah website yang menyajikan resep makanan khas dari pulau Sumatera.
          </p>
          <p>
            Tujuannya adalah memberikan kemudahan bagi pengguna dalam mendapatkan bahan makanan saat mereka tidak punya waktu untuk berbelanja di pasar.
          </p>
          <p>
            MariMasak tidak hanya membantu mencari dan membeli bahan makanan, tetapi juga menyediakan resep dan petunjuk memasak untuk pengguna.
          </p>
        </div>
        <div className="about-image">
          <img src={masakguysImage} alt="MariMasak" />
        </div>
      </div>

      <h2 className="about-title">Tentang Kami</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={dioImage} alt="DIO" />
            <div className="container">
              <h2>Dio Hartawan Arnas</h2>
              <p className="title">Universitas Esa Unggul</p>
              <p>Pengembang Front-End Web Dan Back-End</p>
              <p>
                <a href={dioGithubUrl} className="button">Connect</a>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={arifImage} alt="ARIF" />
            <div className="container">
              <h2>Arif Wibisono</h2>
              <p className="title">Universitas Esa Unggul</p>
              <p>Pengembang Front-End Web Dan Back-End</p>
              <p>
                <a href={arifGithubUrl} className="button">Connect</a>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={rifkyImage} alt="RIFKY" />
            <div className="container">
              <h2>Rifky Hilman</h2>
              <p className="title">Universitas Bina Sarana Informatika</p>
              <p>Pengembang Front-End Web Dan Back-End</p>
              <p>
                <a href={rifkyGithubUrl} className="button">Connect</a>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={indahImage} alt="INDAH" />
            <div className="container">
              <h2>Indah Warohmah</h2>
              <p className="title">Universitas Bina Sarana Informatika</p>
              <p>Pengembang Front-End Web Dan Back-End</p>
              <p>
                <a href={indahGithubUrl} className="button">Connect</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
