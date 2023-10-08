import React, { useState } from "react";
import clientAxios from "../../config/axios";
import "./style.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
export function Login() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = async () => {
    if (nickName === "" || password === "") {
      alert("Por favor complete los campos requeridos.");
      return;
    }
    setLoad(true);
    const data = { nick_name: nickName, password };
    try {
      const response = await clientAxios.post("login", data);

      if (response.data) {
        const token = response.data.data.token;
        if (token === undefined) {
          Swal.fire({
            title: "Alert!",
            text: "usuario o contraseña invalidas",
            icon: "error",
            confirmButtonText: "success",
          });
          setPassword("");

          setLoad(false);
        } else {
          window.localStorage.setItem("token", token);
          setTimeout(() => {
            window.location.replace("/");
          }, 3000);
        }
      }
    } catch (e) {
      if (e.message === "Network Error") {
        Swal.fire({
          title: "Alert!",
          text: "Error de conexion",
          icon: "error",
          confirmButtonText: "cancel",
        });
        setLoad(false);
      }else if( e.message ==="Request failed with status code 404"){
        Swal.fire({
          title: "Alert!",
          text: "El Usuario no Existe",
          icon: "error",
          confirmButtonText: "cancel",
        });
        setLoad(false);
        setPassword('')
      }

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
            {load && (
              <div className="containerloader">
                <span className="loader"></span>
              </div>
            )}
            <br />
            <button onClick={handleSubmit}>Iniciar sesión</button>
          </div>
          <br />

          <div className="social-login">
            <button>Iniciar sesión con Google</button>
            <button>Iniciar sesión con Facebook</button>
          </div>
          <p className="link">
            No tienes cuenta?
            <a href="/register">registrate aqui</a>
          </p>
        </div>
      </div>
    </div>
  );
}
