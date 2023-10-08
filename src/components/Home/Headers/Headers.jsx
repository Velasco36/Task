import React from "react";

import { Logout } from "../New Task/Logout";
import "./style.css";

export function Headers() {
  return (
    <div className="header-container">
      <div className="barra-list">
        <div className="menu-section">

        </div>
        <div className="title-section">
          <h1 className="title-headers">Task Manager</h1>
        </div>
        <div className="search-section">
          <Logout />
        </div>
      </div>
    </div>
  );
}
