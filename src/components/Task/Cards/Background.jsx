// ListCard.js
import { useSelector } from "react-redux";
import { Card } from "./Card";
import "./style.css";

export default function ListCard() {

  const Tasks = useSelector((state) => state.tasks);


  return (
    <div className="grid-container">
      {Tasks.length === 0 && <div className="empty-placeholder"></div>}
      {Tasks.map((Task, index) => (
        <Card key={index} title={Task.title} body={Task.description}/>
      ))}
      {/* <button className="add-card-btn" onClick={addCard}>Add Card</button> */}
    </div>
  );
}

