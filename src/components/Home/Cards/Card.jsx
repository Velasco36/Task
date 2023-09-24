import React from "react";
import AnchorIcon from "@mui/icons-material/Anchor";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./style.css";
import clientAxios from "../../../config/axios";

export const Card = ({ title, body, color, id }) => {
  const token = localStorage.getItem("token");
  const handleDeleteClick = async () => {
    try {
      const response = await clientAxios.delete(`tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response)

      console.log('elimidano correctamente');
    } catch (e) {
      console.error("Error al obtener los datos:", e);
    }
  };
  return (
    <div className="card-container" style={{ backgroundColor: color }}>
      <div className="icon-container" id="icons">
        <div className="letf">
          <DeleteOutlineIcon  onClick={handleDeleteClick} />
        </div>
        <p className="text">Add Task</p>
        <div className="right icons" >
          <AnchorIcon   />
          <EditOutlinedIcon  />
        </div>
      </div>

      <div className="input-container">
        <div className="input-container">
          <input
            className="title border"
            id="title"
            type="text"
            placeholder=" "
            value={title}
            onChange={() => {}}
          />
          <span className="floating-label">Title</span>
        </div>
        <div className="input-container">
          <textarea
            className="description border"
            placeholder=" "
            value={body}
            onChange={() => {}}
          />
          <span className="floating-label">Description</span>
        </div>
      </div>
    </div>
  );
};
