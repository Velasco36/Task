import React, { useState } from "react";
import "./index.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica de autenticación, como Firebase Authentication

    // Ejemplo de cómo imprimir los datos en la consola
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div id="background">
      <div className="login-container bg">
        <div className="login-form">
          <br />
          <br />
          <h2 className="text">Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <br />
              <br />
             
              <input
                type="email"
                placeholder="example@correo.com"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <br />
            <br />
            <div className="form-group">

              <input
                type="password"
                placeholder="your password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <br />
            <button type="submit">Iniciar sesión</button>
          </form>
          <br />
          <div className="social-login">
            <button>Iniciar sesión con Google</button>
            <button>Iniciar sesión con Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}
