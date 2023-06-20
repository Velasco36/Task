import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Modal from "react-modal";
// import dayjs, { Dayjs } from "dayjs";
import dayjs from "dayjs";



Modal.setAppElement("#root");

export function ModalDising({ showModal, handleCloseModal }) {
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));

  const handleTimeChange = (newValue) => {
    setValue(newValue);
  };

  return (
<div>
      {showModal && (
        <Modal
          className="modal"
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <form className="form-modal" onSubmit={handleCloseModal}>
            <label className="text">
              Date:
              <br />
            </label>
            <br />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Choose Date" />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker", "TimePicker"]}>
                <TimePicker
                  label="Choose Hours"
                  value={value}
                  onChange={handleTimeChange}
                />
              </DemoContainer>
            </LocalizationProvider>

            <button className="button" id="button-modal" type="submit">
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}

