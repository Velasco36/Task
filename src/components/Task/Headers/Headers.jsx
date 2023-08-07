import React from "react";
import { Menu } from "./Menu";
import { Search } from "../New Task/Search";
import "./style.css";

export function Headers() {
  return (
    <div className="header-container">
      <div className="barra-list">
        <div className="menu-section">
          <Menu />
        </div>
        <div className="title-section">
          <h1 className="title-headers">Task Manager</h1>
        </div>
        <div className="search-section">
          <Search />
        </div>
      </div>
    </div>
  );
}
