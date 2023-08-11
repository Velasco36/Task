import { useSelector, useDispatch } from "react-redux";
import { AccessAlarm } from "@mui/icons-material";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import { Notification } from "../../Notification/Notification";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { addColor, addNotification, isClosed, setDate, setIsDisable, setValue } from "../../../redux/actions";
import { Card } from "./card";
import "./style.css";

export function CardDesing() {
  const dispatch = useDispatch()
  const title = useSelector((state) => state.title);
  const description = useSelector((state) => state.description);
  const notification = useSelector((state) => state.notification);
  const color = useSelector((state) => state.color);
  const isOpen = useSelector((state) => state.isOpen);
  const date = useSelector((state) => state.date);
  const value = useSelector((state) => state.value);
  const isDisable = useSelector((state) => state.isDisable);


  const handleNotificationClose = () => {
    dispatch(addNotification((null)));
  };

  const handlePinup = () => {
    dispatch(addNotification({
      type: "success",
      message: "Se ha Fijado  correctamente",
    }));
  };
  const handleDate = () => {
    dispatch(addNotification({ type: "success", message: "Añade una fecha" }));
    dispatch(setIsDisable(!isDisable));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
  };


  const handleChangeColor = (e) => {
    const formBody = document.querySelector("#form-container");
    if (formBody) {
      formBody.style.backgroundColor = e.target.value;
    }
    dispatch(addColor((e.target.value)));
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
          <button type="submit" className="modal-button">
            Submit
          </button>
        </div>

        <div className="form-container" id="form-container">
          <br />
          <br />
          <div className="icon-container">
            <AccessAlarm onClick={() => handleDate()}  />
            <AnchorOutlinedIcon
              className="right-icon"
              onClick={() => handlePinup()}
            />
          </div>
          <br />
          <p className="text">Add Task</p>
          <Card
            handleSubmit={handleSubmit}
            showButton={true}
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

                <button onClick={() => dispatch(isClosed(false))}>Cerrar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
