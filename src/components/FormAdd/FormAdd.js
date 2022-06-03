import "./FormAdd.scss";
import HiddenSvg from "../../assets/hidden.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const randInt1 = Math.floor(Math.random() * 10);
const randInt2 = Math.floor(Math.random() * 10);
const randInt3 = Math.floor(Math.random() * 10);
const randInt4 = Math.floor(Math.random() * 10);
const randomCode = `${randInt1}${randInt2}${randInt3}${randInt4}`;

const FormAdd = () => {
  const [cardNumber1, setCardNumber1] = useState("");
  const [cardNumber2, setCardNumber2] = useState("");
  const [cardNumber3, setCardNumber3] = useState("");
  const [cardNumber4, setCardNumber4] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiration, setCardExp] = useState("");
  const [cvv, setCardCvv] = useState("");
  const [balance, setCardBalance] = useState("");

  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);

  const code = randomCode;

  const handleSubmit = () => {
    const card = {
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
      cardName,
      expiration,
      code,
      cvv,
      balance,
    };
    fetch("http://localhost:4000/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    });
    alert("Your card was added");
  };

  return (
    <>
      <div className="FormAdd">
        <h1 className="FormAdd-Title">Add card</h1>
        <form onSubmit={handleSubmit} className="FormAdd-Container">
          <div className="FormAdd-Container-Small">
            <label className="FormAdd-Label">Card number</label>
            <div>
              <input
                className="FormAdd-Input-Small"
                value={cardNumber1}
                onChange={(e) => setCardNumber1(e.target.value)}
                maxLength="4"
                minLength="4"
                required
                placeholder="0123"
              ></input>
              <input
                className="FormAdd-Input-Small"
                value={cardNumber2}
                onChange={(e) => setCardNumber2(e.target.value)}
                maxLength="4"
                minLength="4"
                required
                placeholder="4567"
              ></input>
              <input
                className="FormAdd-Input-Small"
                value={cardNumber3}
                onChange={(e) => setCardNumber3(e.target.value)}
                maxLength="4"
                minLength="4"
                required
                placeholder="8910"
              ></input>
              <input
                className="FormAdd-Input-Small"
                value={cardNumber4}
                onChange={(e) => setCardNumber4(e.target.value)}
                maxLength="4"
                minLength="4"
                required
                placeholder="1112"
              ></input>
            </div>
          </div>
          <div className="FormAdd-Container-Small">
            <label className="FormAdd-Label">Name</label>
            <input
              className="FormAdd-Input"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
              placeholder="Vince Carter"
            ></input>
          </div>
          <div className="FormAdd-Container-Small">
            <label className="FormAdd-Label">Expiration date</label>
            <input
              className="FormAdd-Input"
              value={expiration}
              onChange={(e) => setCardExp(e.target.value)}
              maxLength="5"
              minLength="4"
              required
              placeholder="11/23"
            ></input>
          </div>
          <div className="FormAdd-Container-Small">
            <label className="FormAdd-Label">CVV</label>
            <input
              className="FormAdd-Input"
              value={cvv}
              onChange={(e) => setCardCvv(e.target.value)}
              maxLength="3"
              minLength="3"
              required
              placeholder="012"
            ></input>
          </div>
          <div className="FormAdd-Container-Small">
            <label className="FormAdd-Label">Security Code</label>
            <div className="FormAdd-Container-Smaller">
              {open ? (
                <input className="FormAdd-Input" value={code} readOnly></input>
              ) : (
                <input
                  className="FormAdd-Input"
                  value={"****"}
                  readOnly
                ></input>
              )}
              <img
                src={HiddenSvg}
                alt="HiddenSvg"
                className="FormAdd-Hidden"
                onClick={() => toggle(!open)}
              />
            </div>
          </div>
          <div className="FormAdd-Container-Small">
            <label className="FormAdd-Label">Balance</label>
            <input
              className="FormAdd-Input"
              value={balance}
              onChange={(e) => setCardBalance(e.target.value)}
              required
              placeholder="0123456"
            ></input>
          </div>

          <div className="FormAdd-Buttons">
            <button className="FormAdd-Button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAdd;
