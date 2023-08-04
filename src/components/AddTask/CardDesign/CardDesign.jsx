import React, { useState } from "react";
import { AccessAlarm } from "@mui/icons-material";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import { Notification } from "../../Notification/Notification";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";

import "./style.css";

export function CardDesing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDisable, setisDisable] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleNotificationClose = () => {
    setNotification(null);
  };

  const handlePinup = () => {
    setNotification({
      type: "success",
      message: "Se ha Fijado  correctamente",
    });
  };
  const handleDate = () => {
    setNotification({ type: "success", message: "Añade una fecha" });
    setisDisable(!isDisable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
  };

  const [date, setDate] = useState(null);
  const [color, setColor] = useState("#000000");
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));

  const handleChangeColor = (e) => {
    const formBody = document.querySelector("#form-container");
    if (formBody) {
      formBody.style.backgroundColor = e.target.value;
    }
    setColor(e.target.value);
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleNotificationClose}
        />
      )}

      <div className="container">
        <div className="modal">
          <label className="text">Color:</label>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={handleChangeColor}
          />
          <label className="text">Date:</label>
          <br />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Choose Date"
              value={date}
              disabled={isDisable}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker", "TimePicker"]}>
              <TimePicker
                label="Choose Hours"
                disabled={isDisable}
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <button className="button submit-button" type="submit">
            Submit
          </button>
        </div>

        <div className="form-container" id="form-container">
          <br />
          <br />
          <div className="icon-container">
            <AccessAlarm onClick={() => handleDate()} />
            <AnchorOutlinedIcon
              className="right-icon"
              onClick={() => handlePinup()}
            />
          </div>
          <br />
          <p className="text">Add Task</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <br />
            <div className="">
              <div className="input-container">
                <input
                  className="title border"
                  type="text"
                  placeholder=" "
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <span className="floating-label">Title</span>
              </div>
              <br />
              <div className="input-container">
                <textarea
                  className="description border"
                  placeholder=" "
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <span className="floating-label">Description</span>
              </div>

              <button className="button" type="submit">
                Submit
              </button>
            </div>
            <br />
            <br />
          </form>
        </div>

        {isOpen && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                <input
                  type="color"
                  id="colorPicker"
                  value={color}
                  onChange={handleChangeColor}
                />
                <br />

                <button onClick={() => setIsOpen(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
