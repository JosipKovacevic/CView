import "./Footer.scss";
import FacebookSvg from "../../assets/facebook.svg";
import InstagramSvg from "../../assets/instagram.svg";
import LinkedInSvg from "../../assets/linkedIn.svg";
import TwitterSvg from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Container">
        <div className="Footer-Text_Account">
          <span className="Footer-Title">Account</span>
          <br />
          <span className="Footer-Text">Sign in</span>
          <br />
          <span className="Footer-Text">Register</span>
        </div>
        <div className="Footer-Text_Legal">
          <span className="Footer-Title">Legal</span>
          <br />
          <span className="Footer-Text">Terms of use</span>
          <br />
          <span className="Footer-Text">Privacy policy</span>
        </div>
        <div className="Footer-Text_About">
          <span className="Footer-Title">About</span>
          <br />
          <span className="Footer-Text">Media</span>
          <br />
          <span className="Footer-Text">Our story</span>
        </div>
        <div className="Footer-Text_Plans">
          <span className="Footer-Title">Plans</span>
          <br />
          <span className="Footer-Text">Standard</span>
          <br />
          <span className="Footer-Text">Premium</span>
        </div>
        <img src={FacebookSvg} alt="FacebookSvg" className="Footer-Facebook" />
        <img
          src={InstagramSvg}
          alt="InstagramSvg"
          className="Footer-Instagram"
        />
        <img src={LinkedInSvg} alt="LinkedInSvg" className="Footer-LinkedIn" />
        <img src={TwitterSvg} alt="TwitterSvg" className="Footer-Twitter" />
        <span className="Footer-Coppy">© 2020 C View. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
