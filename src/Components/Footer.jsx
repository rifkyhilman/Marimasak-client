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
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-wrapper__section-two__columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-wrapper__section-two__columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
