import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { useSelector, useDispatch } from "react-redux";
import { setValue, addColor } from "../../../redux/actions";

export function Sidebar({ color }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChangeColor = (e) => {
    const formBody = document.querySelector("#form-container");
    if (formBody) {
      formBody.style.backgroundColor = e.target.value;
    }
    dispatch(addColor(e.target.value));
  };
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    dispatch(setValue(newValue));
  };
  return (
    <div>
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
          <StaticDateTimePicker
            orientation="landscape"
            value={selectedDate || value}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
