import React from "react";
import AnchorIcon from "@mui/icons-material/Anchor";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./style.css";

export const Card = ({ title, body }) => {
  return (
    <div className="card-container">
      <div className="icon-container">
        <AnchorIcon className="icons" />
        <EditOutlinedIcon className="edit-icons" />
      </div>
      <p className="text">Add Task</p>
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
