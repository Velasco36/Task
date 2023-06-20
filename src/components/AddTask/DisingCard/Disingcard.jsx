import React, { useState } from "react";
import { AccessAlarm } from "@mui/icons-material";
import { ModalDising } from "../Modal/ModalDising";

import "./style.css"
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';


export function Disingcard() {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  
  const [showModal, setShowModal] = useState(false);

  const handleChangeColor = (e) => {
    const formBody = document.getElementById("form-body");
    if (formBody) {
      formBody.style.backgroundColor = e.target.value;
    }
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
  };

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="form-body" id="form-body">
        <br />
        <br />
        <div className="icon-container">
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={handleChangeColor}
          />
          <AccessAlarm className="right-icon" onClick={handleIconClick} />
          <AnchorOutlinedIcon className="right-icon" />
        </div>
        <br />
        <p className="text">Add Task</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <br />
          <input
            className="title border"
            type="text"
            placeholder="Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            className="description border"
            placeholder="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ModalDising showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
}
