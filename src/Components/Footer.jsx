import Logo from "../Assets/Logo.png";
import "../Styles/Footer.scss";

// import icon dari mui5
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__section-one">
        <div className="footer-wrapper__section-one__logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-wrapper__section-one__icons">
          <TwitterIcon />
          <LinkedInIcon />
          <YouTubeIcon />
          <FacebookIcon />
        </div>
      </div>
      <div className="footer-wrapper__section-two">
        <div className="footer-wrapper__section-two__columns">
               <a href="/">Beranda</a>
               <a href="about">Tentang</a>
               <a href="keranjang">Keranjang</a>
    
        </div>
        <div className="footer-wrapper__section-two__columns">
          <span>KONTAK KAMI</span>
          <span><LinkedInIcon /> <a href="https://www.linkedin.com/in/dio-hartawan-arnas-b2239a279/"
        target="_blank"
        rel="noopener noreferrer" 
        >Dio</a></span>
          <span><LinkedInIcon /> <a href="https://www.linkedin.com/in/arif-wibisono-526424279/"
        target="_blank"
        rel="noopener noreferrer"
        >Arif</a> </span>
           <span><LinkedInIcon /> <a href="https://www.linkedin.com/in/muhammad-rifki-hilman-1a3421192/"
        target="_blank"
        rel="noopener noreferrer"
        >Rifky</a></span>
          <span><LinkedInIcon /> <a href="https://www.linkedin.com/in/indah-warohmah-740bb3262/"
        target="_blank"
        rel="noopener noreferrer"
        >Indah</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;