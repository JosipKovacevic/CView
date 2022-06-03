import "./FormUpdate.scss";
import HiddenSvg from "../../assets/hidden.svg";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const FormUpdate = () => {
  const { id } = useParams();
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const [cardNumber1, setCardNumber1] = useState("");
  const [cardNumber2, setCardNumber2] = useState("");
  const [cardNumber3, setCardNumber3] = useState("");
  const [cardNumber4, setCardNumber4] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiration, setCardExp] = useState("");
  const [cvv, setCardCvv] = useState("");
  const [code, setCode] = useState("");
  const [balance, setCardBalance] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data);
      });
  }, []);

  useEffect(() => {
    cards && setCard(...cards.filter((card) => card.id === parseInt(id)));
  }, [cards, id]);

  useEffect(() => {
    card && setCardNumber1(card.cardNumber1);
    card && setCardNumber2(card.cardNumber2);
    card && setCardNumber3(card.cardNumber3);
    card && setCardNumber4(card.cardNumber4);
    card && setCardName(card.cardName);
    card && setCardExp(card.expiration);
    card && setCardCvv(card.cvv);
    card && setCode(card.code);
    card && setCardBalance(card.balance);
  }, [card, id]);

  const handleSubmit = (e) => {
    const card = {
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
      cardName,
      expiration,
      cvv,
      code,
      balance,
    };
    fetch(`http://localhost:4000/cards/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    });
    alert("Your card was Updated");
  };

  return (
    <>
      {card && (
        <div className="FormUpdate">
          <h1 className="FormUpdate-Title">Update</h1>
          <form className="FormUpdate-Container">
            <div className="FormUpdate-Container-Small">
              <label className="FormUpdate-Label">Card number</label>
              <div>
                <input
                  className="FormUpdate-Input-Small"
                  defaultValue={`${card.cardNumber1}`}
                  onChange={(e) => setCardNumber1(e.target.value)}
                  maxLength="4"
                  minLength="4"
                  required
                ></input>
                <input
                  className="FormUpdate-Input-Small"
                  defaultValue={`${card.cardNumber2}`}
                  onChange={(e) => setCardNumber2(e.target.value)}
                  maxLength="4"
                  minLength="4"
                  required
                ></input>
                <input
                  className="FormUpdate-Input-Small"
                  defaultValue={`${card.cardNumber3}`}
                  onChange={(e) => setCardNumber3(e.target.value)}
                  maxLength="4"
                  minLength="4"
                  required
                ></input>
                <input
                  className="FormUpdate-Input-Small"
                  defaultValue={`${card.cardNumber4}`}
                  onChange={(e) => setCardNumber4(e.target.value)}
                  maxLength="4"
                  minLength="4"
                  required
                ></input>
              </div>
            </div>
            <div className="FormUpdate-Container-Small">
              <label className="FormUpdate-Label">Name</label>
              <input
                className="FormUpdate-Input"
                defaultValue={card.cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              ></input>
            </div>
            <div className="FormUpdate-Container-Small">
              <label className="FormUpdate-Label">Expiration date</label>
              <input
                className="FormUpdate-Input"
                defaultValue={card.expiration}
                onChange={(e) => setCardExp(e.target.value)}
                maxLength="5"
                minLength="4"
                required
              ></input>
            </div>
            <div className="FormUpdate-Container-Small">
              <label className="FormUpdate-Label">CVV</label>
              <input
                className="FormUpdate-Input"
                defaultValue={card.cvv}
                onChange={(e) => setCardCvv(e.target.value)}
                maxLength="3"
                minLength="3"
                required
              ></input>
            </div>
            <div className="FormUpdate-Container-Small">
              <label className="FormUpdate-Label">Security Code</label>
              <div className="FormUpdate-Container-Smaller">
                {open ? (
                  <input
                    className="FormUpdate-Input"
                    value={card.code}
                    readOnly
                  ></input>
                ) : (
                  <input
                    className="FormUpdate-Input"
                    value={"****"}
                    readOnly
                  ></input>
                )}
                <img
                  src={HiddenSvg}
                  alt="HiddenSvg"
                  className="FormUpdate-Hidden"
                  onClick={() => toggle(!open)}
                />
              </div>
            </div>
            <div className="FormUpdate-Container-Small">
              <label className="FormUpdate-Label">Balance</label>
              <input
                className="FormUpdate-Input"
                defaultValue={`${card.balance}`}
                onChange={(e) => setCardBalance(e.target.value)}
                required
              ></input>
            </div>
            <Link onClick={handleSubmit} to="/" className="FormUpdate-Buttons">
              <button className="FormUpdate-Button">Update</button>
            </Link>
          </form>
        </div>
      )}
    </>
  );
};

export default FormUpdate;
