// ListCard.js
import { useSelector, useDispatch } from "react-redux";
import { Card } from "./Card";
import { setCards } from "../../../redux/actions";
import "./style.css";

export default function ListCard() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  const addCard = () => {
    const newCard = {
      title: "task",
      body: "",
    };
    
    dispatch(setCards([...cards, newCard]));
  };

  return (
    <div className="grid-container">
      {cards.length === 0 && <div className="empty-placeholder"></div>}
      {cards.map((card, index) => (
        <Card key={index} title={card.title} body={card.body} />
      ))}
      <button className="add-card-btn" onClick={addCard}>Add Card</button>
    </div>
  );
}

