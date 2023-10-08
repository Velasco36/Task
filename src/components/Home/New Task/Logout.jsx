import React from "react";
import "./style.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { Tool } from "./tool";
export function Logout() {
  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setTimeout(() => {
      window.location.replace("/login");
    }, 1000);
  };
  return (
    <div className="logout">
      <LogoutIcon onClick={handleSubmit} className="large-icon" />
      <Tool className="large-icon" />
    </div>
  );
}
