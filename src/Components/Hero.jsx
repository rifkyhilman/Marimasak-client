import React from 'react';
import BannerImage from '../Assets/Banner.png';
import Plx from 'react-plx';
import '../Styles/Hero.scss';

const exampleParallaxData = [
    {
      start: "self",
      duration: "100vh",
      properties: [
        {
          property: "scaleX",
          startValue: 1,
          endValue: 3,
        },
        {
          property: "scaleY",
          startValue: 1,
          endValue: 3,
        }
      ]
    }
  ];
  

const Hero = () => {
    return (
        <section className="ContainerHero" id='back-to-top-anchor'>
            <Plx parallaxData={exampleParallaxData}>          
                <picture className='ContainerHero__banner'>
                    <img src={BannerImage} alt="hero-element" />
                </picture>
            </Plx>
            <div className="ContainerHero__inner">
                <h1>Makanan Asli<br></br> Khas Sumatera</h1>
                <p>Bersiaplah untuk perjalanan kuliner yang tak terlupakan !</p>
            </div>
        </section>
    );
}

export default Hero;