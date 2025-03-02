import "./Footer.scss";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/icons/Facebook.svg";
import tweeter from "../../assets/icons/X_twitter.svg";
import instagram from "../../assets/icons/Instagram.svg";
import pintrest from "../../assets/icons/Pinterest.svg";

function Footer() {
  return (
    <>
      <div className="foot">
        <NavLink to={`/`} className={() => ""}>
          <div className="foot__title">
            <h3>Snaps</h3>
          </div>
        </NavLink>
        <div className="foot__col">
          <a href="">For photographers</a>
          <a href="">Hire talent</a>
          <a href="">Inspiration</a>
        </div>
        <div className="foot__col">
          <a href="">About</a>
          <a href="">Careers</a>
          <a href="">Support</a>
        </div>
        <div className="foot__icons">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://x.com/">
            <img src={tweeter} alt="X" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://ca.pinterest.com/">
            <img src={pintrest} alt="pintrest" />
          </a>
        </div>
      </div>
      <div className="stain">
        <p>© 2024 Snaps</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
    </>
  );
}

export default Footer;
