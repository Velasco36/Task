// Notification.js

import React, { useState, useEffect } from "react";
import "./style.css";

export function Notification({ message, type, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  const handleDismiss = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className={`notification ${type}`}>
          <p>{message}</p>
          <span className="close-icon" onClick={handleDismiss}>
            &#x2715;
          </span>
        </div>
      )}
      {!isVisible && (
        <div className={`notification ${type} closing`}>
          <p>{message}</p>
          <span className="close-icon" onClick={handleDismiss}>
            &#x2715;
          </span>
        </div>
      )}
    </>
  );
}
