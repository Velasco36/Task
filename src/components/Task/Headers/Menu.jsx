import React, { useState, useEffect } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      document.querySelector(".modal").classList.add("slide-out");
    }
  }, [isOpen]);

  return (
    <>
      <MenuIcon className="menu" onClick={() => setIsOpen(true)} />

      <div className={isOpen ? "modal" : "modal slide-out"}>
        {isOpen && (
          <div className="overlay">
            <div className="modal">
              <button onClick={() => setIsOpen(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
