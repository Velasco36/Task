import { useEffect, useState } from "react";
import clientAxios from "../../../config/axios";
import { useSelector, useDispatch } from "react-redux";
import { AccessAlarm } from "@mui/icons-material";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import { Notification } from "../../Notification/Notification";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  addColor,
  addNotification,
  isClosed,
  setDate,
  setIsDisable,
  setValue,
  addTask,
  anchor_task

} from "../../../redux/actions";
import { Card } from "./card";
import "./style.css";

export function CardDesing() {

  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);
  const description = useSelector((state) => state.description);
  const notification = useSelector((state) => state.notification);
  const color = useSelector((state) => state.color);
  const isOpen = useSelector((state) => state.isOpen);
  const date = useSelector((state) => state.date);
  const value = useSelector((state) => state.value);
  const isDisable = useSelector((state) => state.isDisable);
  const ID_task = useSelector((state) => state.id);
  const [load, setLoad] = useState(false);
  const [anchor, setanchor] = useState('pending');
  const token = localStorage.getItem("token");
  dispatch(anchor_task(anchor));

  useEffect(() => {
    const fetchData = async () => {
      if (ID_task !== "") {
        try {
          const response = await clientAxios.get(`tasks/${ID_task}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          const data = response.data;
          console.log(data);
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }

      }else{
        return
      }
    };

    fetchData();
  },);

  const handleNotificationClose = () => {
    dispatch(addNotification(null));
  };
  const handlePinup = () => {
    if (anchor === "pending"){
      dispatch(
        addNotification({
          type: "success",
          message: "Se ha Fijado  correctamente anchor",
        })
      );
      setanchor('anchored')
    }else{
        dispatch(
          addNotification({
            type: "success",
            message: `Se ha desAnclado correctamente pending ${anchor}`,
          })
        );
      
        setanchor('pending')
    }
  };
  const handleDate = () => {
    dispatch(addNotification({ type: "success", message: "Añade una fecha" }));
    dispatch(setIsDisable(!isDisable));
  };
  const handleChangeColor = (e) => {
    const formBody = document.querySelector("#form-container");
    if (formBody) {
      formBody.style.backgroundColor = e.target.value;
    }
    dispatch(addColor(e.target.value));
  };
  console.log(anchor)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      dispatch(addNotification({ type: "error", message: "Por favor complete los campos requeridos" }));
      return;
    }
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
    dispatch(addNotification({ type: "success", message: "se ha agregado correctamente" }));

    const task = { title, description };

    const data = {
      name: title,
      description: description,
      state: anchor,
      color: color,
      limitAt: "2023-08-24T19:05:13.519-04:00",
    };

    setLoad(true);
    try {
      const response = await clientAxios.post("tasks", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response.data);
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
        <div className="modal" id="aling-modal">
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
                onChange={(newValue) => dispatch(setValue(newValue))}
              />
            </DemoContainer>
          </LocalizationProvider>

        </div>

        <div className="form-container" id="form-container">
          <br />
          <br />
          <div className="icon-container" id="color">
            <AccessAlarm style={{ color: 'white'}} onClick={() => handleDate()} />
            <p id="text">Add Task</p>
            <AnchorOutlinedIcon
               style={{ color : anchor==='anchored' ? 'red' : 'white' }}
              className="right-icon"
              onClick={() => handlePinup()}
            />
          </div>
          <br />

          <Card
            handleSubmit={handleSubmit}
            showButton={true}
            setLoad={false}
            load={load}
          />
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

                <button onClick={() => dispatch(isClosed(false))}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
