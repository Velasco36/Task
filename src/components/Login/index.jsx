import React, { useState } from "react";
import clientAxios from "../../config/axios";
import { useSelector, useDispatch } from "react-redux";
import { User_name } from "../../redux/actions";
import "./index.css";

export function Login() {
  const dispatch = useDispatch()
  const Users = useSelector((state) => state.users);
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  console.log(Users)

  const handleSubmit = async () => {
    const user  = { nickName}
    if (nickName === "" || password === "") {
      alert("Por favor complete los campos requeridos.");
      return;
    }
    setLoad(true);
    try {
      const response = await clientAxios.post("login", {
        nick_name: nickName,
        password: password,
      });

      if (response.data) {
        const token = response.data.token;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", nickName);
        
        setTimeout(() => {
          window.location.replace("/");
        }, 3000);
        console.log(response.data.token);
      }
    } catch (e) {
      console.log(e);
    }
    dispatch(User_name(user))
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
