import React, { useState } from 'react';
import { NavLink } from "react-router-dom";





import { RegistroUsuario } from './RegistrarUsuario';
import { ListarUsuarios } from "./ListarUsuarios";
import { EstadisticaUsuarios } from "./EstadisticaUsuarios";

export const Menu = (props) => {

  const [usu] = useState(localStorage.getItem("usu"));
  const [reg, setReg] = useState("");
  const [lis, setLis] = useState("");
  const [est, setEst] = useState("");

  function cerrarSesion() {
    localStorage.removeItem("usu");
    localStorage.removeItem("miLogin");
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("textousu").value = "";
    document.getElementById("textopass").value = "";
    document.getElementById("textousu").focus();
  }

  function op_registrar() {
    setReg("1");
    setLis("0");
    setEst("0");
  }

  function op_listar() {
    setReg("0");
    setLis("1");
    setEst("0");
  }

  function op_estadistica() {
    setReg("0");
    setLis("0");
    setEst("1");
  }


  return (
    <>
      <div id="caja_menu" style={{ textAlign: "left" }}>

        <strong className="h3">
          GMANAGER
          <br />
          <br />
          <h4>Bienvenido: {usu.toUpperCase()}</h4>
        </strong>

        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 20 }}>
          <div className="container-fluid">

            <label className="navbar-brand  h5" href=" ">Menú Principal</label>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="" className="nav-link h5 text-center" onClick={op_registrar}>Registrar Usuario</NavLink>
                &nbsp;&nbsp;
                <NavLink to="" className="nav-link h5 text-center" onClick={op_listar}>Lista de Usuarios</NavLink>
                &nbsp;&nbsp;
                <NavLink to="" className="nav-link h5 text-center" onClick={op_estadistica}>Estadistica</NavLink>
                &nbsp;&nbsp;
                <a className="nav-link h5 text-end" style={{ color: "blue" }} href="" onClick={cerrarSesion}>Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {reg === "1" && <RegistroUsuario />}
      {lis === "1" && <ListarUsuarios />}
      {est === "1" && <EstadisticaUsuarios />}

    </>
  );
};
