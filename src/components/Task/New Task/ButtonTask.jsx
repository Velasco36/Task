import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function ButtonTask() {
  return (
    <div style={{ textAlign: "center" }}>
      <button type="submit" className="button">
        <Link to="/home">
          <h2>New Task</h2>
        </Link>
      </button>
    </div>
  );
}
