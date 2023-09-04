import React, { useState } from "react";
import "./index.css";
import axios from "axios";


export function Login() {
  const [nick_name, setnick_name] = useState("");
  const [password, setPassword] = useState("");

  const handlenick_nameChange = (e) => {
    setnick_name(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmitButton = async () => {
    if (nick_name === "" || password === "") {
      // Tu lógica de validación aquí
      console.log("Por favor complete todos los campos requeridos.");
      return;
    }

    console.log("nick_name:", nick_name);
    console.log("Contraseña:", password);

    try {

     const user = {
      nick_name: nick_name,
      password: password,
      }
      console.log(user)
      const response = await axios.post('http://localhost:3333/login', user);

      console.log(response);
      // const token = response.data.token;
      // // Guardar el token en localStorage
      // window.localStorage.setItem("token", token);

      // Redirigir después del inicio de sesión exitoso
      console.log("Inicio de sesión exitoso. Redireccionando...");
      // Puedes usar react-router-dom para redirigir a una página diferente si es necesario.
    } catch (error) {
      console.log("Error en la solicitud de inicio de sesión:", error);
      // Manejar errores de inicio de sesión aquí, por ejemplo, mostrar un mensaje de error al usuario.
      console.log(error)
    }
  };

  return (
    <div id="background">
      <div className="login-container bg">
        <div className="login-form">
          <br />
          <br />
          <h2 className="text">Iniciar sesión</h2>
          <form onSubmit={handleSubmitButton}>
            <div className="form-group">
              <br />
              <br />

              <input
                type="text"
                placeholder="example@correo.com"
                id="nick_name"
                value={nick_name}
                onChange={handlenick_nameChange}
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
