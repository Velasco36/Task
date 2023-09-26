import React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import AnchorIcon from "@mui/icons-material/Anchor";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./style.css";
// import { useDispatch } from "react-redux";
// import { updateDescription, updateTitle } from "../../../redux/actions";
// import { Id_task } from "../../../redux/actions";
import clientAxios from "../../../config/axios";

export const Card = ({ title, body, color, id, state, date }) => {
  const [cardTitle, setCardTitle] = useState(title);
  const [cardDescriptions, setDescriptions] = useState(body);
  // const dispatch = useDispatch();

  const token = localStorage.getItem("token");
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
      const response = await clientAxios.put(`tasks/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      Swal.fire({
        title: "Success!",
        text: "Se ha editado correctamente",
        icon: "success",
        confirmButtonText: "Confirmar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.replace("/");
        }
      });
    } catch (e) {
      console.error("Error al obtener los datos:", e);
    }
  };
  const handleDeleteClick = async () => {
    try {
      const response = await clientAxios.delete(`tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire({
        title: "Alert!",
        text: "se ha eliminado correctamente",
        icon: "success",
        confirmButtonText: "success",
      });
      console.log(response);
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);

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
      <div className="input-container">
        <div className="input-container">
          <input
            className="title border"
            id="title"
            type="text"
            placeholder=" "
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <span className="floating-label">Title</span>
        </div>
        <div className="input-container">
          <textarea
            className="description border"
            placeholder=" "
            value={cardDescriptions}
            onChange={(e) => setDescriptions(e.target.value)}
          />
          <span className="floating-label">Description</span>
        </div>

        <div className="input-container">
          <Link to="/">
            <button className="add-card-btn" onClick={handleClick}>
              edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
