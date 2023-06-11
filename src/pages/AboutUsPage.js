import React from "react";
import '../Styles/AboutUsPage.scss';

const AboutUsPage = () => {
    return (
        <>
        <div className="container"> 
        <h1> MariMasak</h1>
        <p>MariMasak adalah website yang menyajikan resep makanan khas dari pulau Sumatera. </p>
        <p>Tujuannya adalah memberikan kemudahan bagi pengguna dalam mendapatkan bahan makanan saat mereka tidak punya waktu untuk berbelanja di pasar.</p>
        <p>MariMasak tidak hanya membantu mencari dan membeli bahan makanan, tetapi juga menyediakan resep dan petunjuk memasak untuk menginspirasi pengguna.</p>
        </div>

        <div class="link-image">
        <img src="img/ehem.png" alt="Our Team"></img>
        </div>
        </>
    )

}

export default AboutUsPage;