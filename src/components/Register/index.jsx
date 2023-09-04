import React, { useState } from "react";
import "./index.css";
export function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario.
  };

  return (
    <div id="l">
      <div className="registro">
        <form onSubmit={handleSubmit} className="formulario">
          <h2>Registro como Profesional</h2>

          <div className="campo">
            <input
              id="nombre"
              placeholder=""
              value={formData.nombre}
              onChange={handleChange}
            />
            <label htmlFor="nombre">Nombre</label>
          </div>

          <div className="campo">
            <input
              type="email"
              id="email"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="campo">
            <input
              type="password"
              id="password"
              placeholder=""
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="campo">
            <input
              type="password"
              id="repeatPassword"
              placeholder=""
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
            />
            <label htmlFor="repeatPassword">Repetir Contraseña</label>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
