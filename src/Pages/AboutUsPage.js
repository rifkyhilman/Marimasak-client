import React from "react";
import '../Styles/AboutUsPage.scss';

const AboutUsPage = () => {
    return (
        <>
            <div class="about-section">
                <h1>MariMasak</h1>
                <p>MariMasak adalah website yang menyajikan resep makanan khas dari pulau Sumatera. </p>
                <p>Tujuannya adalah memberikan kemudahan bagi pengguna dalam mendapatkan bahan makanan saat mereka tidak punya waktu untuk berbelanja di pasar.</p>
                <p>MariMasak tidak hanya membantu mencari dan membeli bahan makanan, tetapi juga menyediakan resep dan petunjuk memasak untuk pengguna.</p>
            </div>

            <h2>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="img/dio.JPEG" alt="DIO"></img>
                        <div class="container">
                            <h2>Dio Hartawan</h2>
                            <p class="title">Universitas Esa Unggul</p>
                            <p>jane@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="img/arif.jpeg" alt="ARIF"></img>
                        <div class="container">
                            <h2>Arif Wibisono</h2>
                            <p class="title">Universitas Esa Unggul</p>
                            <p>jane@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="img/rifky.JPEG" alt="RIFKY"></img>
                        <div class="container">
                            <h2>Rifky Hilman</h2>
                            <p class="title">Universitas Bina Sarana Informatika</p>
                            <p>jane@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="img/indah.JPEG" alt="INDAH"></img>
                        <div class="container">
                            <h2>Indah Warohmah</h2>
                            <p class="title">Universitas Bina Sarana Informatika</p>
                            <p>jane@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>    
            </>
            )

}

            export default AboutUsPage;

