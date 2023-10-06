import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { GetUser } from "../api/User/getUser";
import { Headers } from "../Home/Headers/Headers";
import { ApiChangePassword } from "../api/User/apichangePassword.js";

export function ChangePassword() {
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const user = useSelector((state) => state.nick_name);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetUser(dispatch);
      } catch (e) {
        console.error("Error al obtener los datos:", e);
      }
    };
    fetchData();
  });

  const handleSutmit = async () => {
    const data = {
      oldpassword: oldPassword,
      newpassword: newPassword,
    };

    try {
      await ApiChangePassword(data);
    } catch (e) {
      console.error("Error al obtener los datos:", e);
    }
  };
  return (
    <div id="bg">
    <Headers />
      <div className="login-container">
        <div className="form-box">
          <label className="title">{user}</label>
          <div className="input-container">
            <input
              className="title border"
              type="password"
              id="color-title"
              placeholder=""
              value={oldPassword}
              onChange={(e) => setoldPassword(e.target.value)}
              required
            />
            <span className="floating-label">olderPassword</span>
          </div>
          <br />
          <div className="input-container">
            <input
              className="title border"
              type="password"
              id="color-title"
              placeholder=""
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <span className="floating-label">NewPassword</span>
          </div>
          <br />
          <button onClick={handleSutmit}>submit</button>
        </div>
      </div>
    </div>
  );
}
