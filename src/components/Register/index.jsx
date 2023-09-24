import React, { useState } from "react";
import "./index.css";
import clientAxios from "../../config/axios";

export function Register() {
  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nickname === "" || password === "") {
      alert("Por favor complete los campos requeridos.");
      return;
    }
    try {
      const response = await clientAxios.post("user", {
        email,
        nick_name: nickname,
        password
      });

      if (response.data) {
       console.log(response)
       console.log('data')
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="l">
      <div className="registro">
        <div className="formulario">
          <br />
          <br />

          <h2>Registro como Profesional</h2>
          <br />
          <br />

          <div className="input-container">
            <input
              name="nickName"
              id="color-title"
              placeholder=""
              value={nickname}
              onChange={(e) => setNickName(e.target.value)}
            />
            <span className="floating-label">Name</span>
          </div>

          <div className=" input-container">
            <input
              type="email"
              id="email"
              placeholder=""
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="floating-label">Email</span>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder=""
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="floating-label">Password</span>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="repeatPassword"
              placeholder=""
              name="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatpassword(e.target.value)}
            />
            <span className="floating-label">Repeat Password</span>
          </div>
          <button onClick={handleSubmit}>Registrarse</button>
          <p>
              Already have an account?
              <a href="/login">Login here</a>
            </p>
        </div>
      </div>
    </div>
  );
}
