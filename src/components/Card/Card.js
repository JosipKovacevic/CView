import "./Card.scss";
import { useState, useEffect } from "react";
import ChipSvg from "../../assets/chip.svg";
import AddSvg from "../../assets/add.svg";
import { Link } from "react-router-dom";

const Card = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div className="Wrapper">
      {cards &&
        cards.map((card) => (
          <div key={card.id} className="Container">
            <div className="Card">
              <Link to={`/Details/${card.id}`} className="Card-Background">
                <div className="Card-Grid">
                  <img src={ChipSvg} alt="ChipSvg" className="Card-ChipSvg" />
                  <span className="Card-ExpirationDate">EXPIRATION DATE</span>
                  <p className="Card-Date">{card.expiration}</p>
                  <span className="Card-Number">Card Number</span>
                  <p className="Card-Numbres Card-Numbres-1">****</p>
                </div>
                <p className="Card-Name">{card.cardName}</p>
                <p className="Card-Numbres Card-Numbres-2">****</p>
                <p className="Card-Numbres Card-Numbres-3">****</p>
                <p className="Card-Numbres Card-Numbres-4">
                  {card.cardNumber4}
                </p>
                <p className="Card-Logo">CView</p>
              </Link>
              <Link to={`/Update/${card.id}`} className="Card-Link_Update">
                <button className="Card-Button_Update">Update</button>
              </Link>

              <Link
                to="/"
                className="Card-Link_Delete"
                onClick={() => window.location.reload().scrollTo(0, 0)}
              >
                <button
                  className="Card-Button_Update"
                  onClick={() => {
                    fetch(`http://localhost:4000/cards/${card.id}`, {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                    });
                    alert("Your card was Deleted");
                  }}
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
        ))}
      <Link to="/Add" className="Card-AddSvg">
        <img src={AddSvg} alt="Card-AddSvg" className="Card-AddSvg_Img" />
      </Link>
    </div>
  );
};

export default Card;
