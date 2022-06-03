import "./Landing.scss";
import CardsSvg from "../../assets/cards.svg";

const Landing = () => {
  return (
    <>
      <div className="Landing">
        <div className="Landing-Wrapper">
          <img src={CardsSvg} alt="CardsSvg" className="Landing-CardsSvg" />
          <h1 className="Landing-Title">Card View</h1>
          <span className="Landing-Text">App for tracking credit cards.</span>
          <button className="Landing-Button">Join now</button>
          <hr className="Landing-Line" />
        </div>
      </div>
    </>
  );
};

export default Landing;
