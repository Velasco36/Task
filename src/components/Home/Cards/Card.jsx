import React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { CardForm } from "./cardForm";
import AnchorIcon from "@mui/icons-material/Anchor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./style.css";
import { putTask } from "../../api/Task/putTask";
import { deleteTask } from "../../api/Task/deleteTask";

export const Card = ({ title, body, color, id, state, date }) => {
  const [cardTitle, setCardTitle] = useState(title);
  const [cardDescriptions, setDescriptions] = useState(body);
  const fechaFormateada = dayjs(date).format("YYYY-MM HH:mm");

  const [anchor, setAnchor] = useState(
    state === "pending" ? "anchored" : "pending"
  );

  const handleClick = async () => {
    const newAnchor = anchor === "pending" ? "anchored" : "pending";
    setAnchor(newAnchor);

    const data = {
      name: cardTitle,
      description: cardDescriptions,
      state: anchor,
    };

    try {
        await putTask(id, data)
    } catch (e) {
      console.error("Error al obtener los datos:", e);
    }
  };
  const handleDeleteClick = async () => {
    try {

      await deleteTask(id)
      console.log("elimidano correctamente");
    } catch (e) {
      console.error("Error al obtener los datos:", e);
    }
  };
  return (
    <div className="card-container" style={{ backgroundColor: color }}>
      <div className="icon-container" id="icons">
        <div className="letf">
          <DeleteOutlineIcon
            style={{ color: "white" }}
            onClick={handleDeleteClick}
          />
        </div>
        <p className="text">Add Task</p>
        <br />
        <p className="date">Date: {fechaFormateada}</p>
        <div className="right ">
          <AnchorIcon
            onClick={handleClick}
            style={{ color: state === "anchored" ? "red" : "white" }}
          />
        </div>
      </div>
      <CardForm
        cardTitle={cardTitle}
        setCardTitle={setCardTitle}
        cardDescriptions={cardDescriptions}
        setDescriptions={setDescriptions}
        handleClick={handleClick}
      />
    </div>
  );
};
