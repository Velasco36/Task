import React from "react";
import './style.css'
import LogoutIcon from '@mui/icons-material/Logout';

export function Logout() {

    const handleSubmit = () => {
        console.log('click')
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setTimeout(() => {
            window.location.replace("/login");
        }, 1000);
    }
  return (
    <div className="logout">

        <LogoutIcon onClick={handleSubmit} className="large-icon"/>
    </div>
  );
}
