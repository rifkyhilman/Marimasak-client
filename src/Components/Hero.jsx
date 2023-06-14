import BannerImage from '../Assets/MARIMASAK.png';
import '../Styles/Hero.scss';

const Hero = () => {
    return (
        <section className="ContainerHero" id='back-to-top-anchor'>
            <picture className='ContainerHero__banner'>
                <img src={BannerImage} alt="hero-element" />
            </picture>
            <div className="ContainerHero__inner">
                <h1>Makanan Asli<br></br> Khas Sumatera</h1>
                <p>Bersiaplah untuk perjalanan kuliner yang tak terlupakan !</p>
            </div>
        </section>
    );
}

export default Hero;