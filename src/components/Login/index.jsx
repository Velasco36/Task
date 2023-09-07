import React, { useState } from "react";
import clientAxios from "../../config/axios";
import "./index.css";

export function Login() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (nickName === "" || password === "") {
      alert("Por favor complete los campos requeridos.");
      return;
    }

    try {
      const response = await clientAxios.post("login", {
        nick_name: nickName,
        password: password,
      });

      if (response.data) {
        // en este punto guardas tu token en local storage: response.data.token
        // y redireccionas la vista al home
        console.log(response.data.token);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="background">
      <div className="login-container bg">
        <div className="login-form">
          <br />
          <br />
          <h2 className="text">Iniciar sesión</h2>
          <div>
            <div className="form-group">
              <br />
              <br />

              <input
                type="text"
                placeholder="example@correo.com"
                id="nick_name"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <button onClick={handleSubmit}>Iniciar sesión</button>
          </div>
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
