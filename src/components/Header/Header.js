import "./Header.scss";
import HamburgerSvg from "../../assets/hamburger.svg";
import LogOutSvg from "../../assets/logOut.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-Wrapper">
          <img
            src={HamburgerSvg}
            alt="HamburgerSvg"
            className="Header-Hamburger"
          />
          <Link to="/" className="Header-TextWrapper_Link">
            <span className="Header-Text_Home Header-Text">Home</span>
          </Link>
          <span className="Header-Text_About Header-Text">About</span>
          <span className="Header-Text_Deals Header-Text">New deals</span>
          <Link to="/" className="Header-TextWrapper">
            <span className="Header-LogoText">CView</span>
          </Link>
          <div className="Header-User">
            <span>Hi, Vince</span>
          </div>
          <img src={LogOutSvg} alt="LogOutSvg" className="Header-LogOut" />
        </div>
        <hr className="Header-Line" />
      </div>
    </>
  );
};

export default Header;
