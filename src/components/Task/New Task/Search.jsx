import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export function Search() {
  return (
    <div className="center">
      <button type="submit" className="button-search">
        <SearchIcon style={{ marginRight: "5px" }} />
        <input type="text" placeholder="Buscar" className="input-search" />
      </button>
    </div>
  );
}
