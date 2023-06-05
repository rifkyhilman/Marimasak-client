import BannerImage from "../Assets/cook.svg";
import EastIcon from '@mui/icons-material/East';
import "../Styles/Hero.scss";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-container__text-section">
                <h1 className="hero-container__text-section__heading">
                Bersiaplah untuk perjalanan kuliner yang tak terlupakan!
                </h1>
                <p className="hero-container__text-section__text">
                Temukan kelezatan kuliner eksotis dari Pulau Sumatera. 
                Rasakan cita rasa autentik dan jelajahi hidangan-hidangan khas yang menggugah selera. 
                </p>
                <button className="hero-container__button">
                    Cek Resep <EastIcon />
                </button>
            </div>
            <div className="hero-container__image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
}

export default Hero;