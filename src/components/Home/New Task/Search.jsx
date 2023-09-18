import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './style.css'

export function Search() {
  return (
    <div className="center">
      <button type="submit" className="button-search">
        <SearchIcon className="icons-search" />
        <input type="text" placeholder="Buscar" className="input-search" />
      </button>
    </div>
  );
}
