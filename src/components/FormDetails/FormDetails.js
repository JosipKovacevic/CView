import "./FormDetails.scss";
import HiddenSvg from "../../assets/hidden.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FormDetails = () => {
  const { id } = useParams();
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

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

  const handleDelete = () => {
    fetch(`http://localhost:4000/cards/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    alert("Your card was Deleted");
  };

  return (
    <>
      {card && (
        <div className="FormDetails">
          <h1 className="FormDetails-Title">Details</h1>
          <form className="FormDetails-Container">
            <div className="FormDetails-Container-Small">
              <label className="FormDetails-Label">Card number</label>
              <div>
                <input
                  className="FormDetails-Input-Small"
                  value={`${card.cardNumber1}`}
                  readOnly
                ></input>
                <input
                  className="FormDetails-Input-Small"
                  value={`${card.cardNumber2}`}
                  readOnly
                ></input>
                <input
                  className="FormDetails-Input-Small"
                  value={`${card.cardNumber3}`}
                  readOnly
                ></input>
                <input
                  className="FormDetails-Input-Small"
                  value={`${card.cardNumber4}`}
                  readOnly
                ></input>
              </div>
            </div>
            <div className="FormDetails-Container-Small">
              <label className="FormDetails-Label">Name</label>
              <input
                className="FormDetails-Input"
                value={card.cardName}
                readOnly
              ></input>
            </div>
            <div className="FormDetails-Container-Small">
              <label className="FormDetails-Label">Expiration date</label>
              <input
                className="FormDetails-Input"
                value={card.expiration}
                readOnly
              ></input>
            </div>
            <div className="FormDetails-Container-Small">
              <label className="FormDetails-Label">CVV</label>
              <input
                className="FormDetails-Input"
                value={card.cvv}
                readOnly
              ></input>
            </div>
            <div className="FormDetails-Container-Small">
              <label className="FormDetails-Label">Security Code</label>
              <div className="FormDetails-Container-Smaller">
                {open ? (
                  <input
                    className="FormDetails-Input"
                    value={card.code}
                    readOnly
                  ></input>
                ) : (
                  <input
                    className="FormDetails-Input"
                    value={"****"}
                    readOnly
                  ></input>
                )}
                <img
                  src={HiddenSvg}
                  alt="HiddenSvg"
                  className="FormDetails-Hidden"
                  onClick={() => toggle(!open)}
                />
              </div>
            </div>
            <div className="FormDetails-Container-Small">
              <label className="FormDetails-Label">Balance</label>
              <input
                className="FormDetails-Input"
                value={`${card.balance} $`}
                readOnly
              ></input>
            </div>

            <div className="FormDetails-Buttons1">
              <Link to={`/Update/${card.id}`}>
                <button className="FormDetails-Button">Update</button>
              </Link>
              <Link to="/">
                <button className="FormDetails-Button" onClick={handleDelete}>
                  Delete
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FormDetails;
