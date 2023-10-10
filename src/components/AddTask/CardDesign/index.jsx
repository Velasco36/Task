import React from 'react';
import { useState } from "react";
import clientAxios from "../../../config/axios";
import { useSelector, useDispatch } from "react-redux";
import { AccessAlarm } from "@mui/icons-material";
import { Notification } from "../../Notification/Notification";
import { Sidebar } from "../date/sidebar";
import { addNotification, setIsDisable, addTask } from "../../../redux/actions";
import { IconsAnchor } from "./../icons/anchor";
import { Card } from "./card";
import "./style.css";
export function CardDesing() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);
  const description = useSelector((state) => state.description);
  const notification = useSelector((state) => state.notification);
  const color = useSelector((state) => state.color);
  const value = useSelector((state) => state.value);
  const isDisable = useSelector((state) => state.isDisable);
  const anchor = useSelector((state) => state.states);
  const [load, setLoad] = useState(false);
  const token = localStorage.getItem("token");
  const fechaFormateada = value.format("YYYY-MM-DDTHH:mm:ss.SSSZ");

  const handleNotificationClose = () => {
    dispatch(addNotification(null));
  };
  const [showButton, setshowButton] = useState(true)

  const handleDate = () => {
    dispatch(addNotification({ type: "success", message: "Añade una fecha" }));
    dispatch(setIsDisable(!isDisable));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      dispatch(
        addNotification({
          type: "error",
          message: "Por favor complete los campos requeridos",
        })
      );
      return;
    }

    const task = { title, description };
    const data = {
      name: title,
      description: description,
      state: anchor,
      color: color,
      limitAt: fechaFormateada,
    };

    setLoad(true);
    setshowButton(false)
    try {
      const response = await clientAxios.post("tasks", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTimeout(() => {
        window.location.replace("/");
      }, 3000);
      dispatch(
        addNotification({
          type: "success",
          message: "se ha agregado correctamente",
        })
      );

      console.log(response)

    } catch (e) {
      console.error("Error al obtener los datos:", e);
    }
    dispatch(addTask(task));
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
        <Sidebar color={color} />
        <div className="form-container" id="form-container">
          <br />
          <br />
          <div className="icon-container" id="color">
            <AccessAlarm
              style={{ color: "white" }}
              onClick={() => handleDate()}
            />
            <IconsAnchor anchor={anchor} />
          </div>
          <br />
          <Card
            handleSubmit={handleSubmit}
            showButton={showButton}
            setLoad={false}
            load={load}
          />
        </div>
      </div>
    </>
  );}
