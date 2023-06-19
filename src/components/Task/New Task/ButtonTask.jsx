import React from "react";
import "./style.css";

export function ButtonTask() {
  return (
    <div style={{ textAlign: "center" }}>
      <button type="submit" className="button">
        <h2>New task</h2>
      </button>
    </div>
  );
}
