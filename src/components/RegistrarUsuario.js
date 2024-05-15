import React, { useState, useEffect } from 'react';

export const RegistroUsuario = () => {

  const obtenerUsuariosRegistrados = () => {
    var datos = localStorage.getItem("usuariosRegistrados");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };

  const [usuariosRegistrados, setUsuariosRegistrados] = useState(obtenerUsuariosRegistrados());
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const guardarUsuario = (e) => {
    e.preventDefault();
    var nuevoUsuario = { nombre, correo, usuario, contraseña };
    setUsuariosRegistrados([...usuariosRegistrados, nuevoUsuario]);
    limpiarFormulario();
  };

  useEffect(() => {
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
  }, [usuariosRegistrados]);

  const limpiarFormulario = () => {
    setNombre("");
    setCorreo("");
    setUsuario("");
    setContraseña("");
    document.getElementById("formularioRegistroUsuario").reset();
  };

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">
        REGISTRO DE USUARIO
        <br />
        <form id="formularioRegistroUsuario" onSubmit={guardarUsuario}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="text" placeholder="Nombre completo" onChange={(e) => setNombre(e.target.value)} required />
            </div>

            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="email" placeholder="Correo electrónico" onChange={(e) => setCorreo(e.target.value)} required />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="text" placeholder="Nombre de usuario" onChange={(e) => setUsuario(e.target.value)} required />
            </div>

            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} required />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col">
              <button className="btn btn-primary btn-lg">Registrar Usuario</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
