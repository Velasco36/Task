// ListCard.js
import React, { useState } from "react";
import "./style.css";
import { Card } from "./Card";

export default function ListCard() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards((prevCards) => [
      ...prevCards,
      {
        title: "task",
        body: "",
      },
    ]);
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

