import React, { useState, useEffect } from 'react';

export const ListarUsuarios = () => {

  const obtenerUsuariosRegistrados = () => {
    var datos = localStorage.getItem("usuariosRegistrados");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };

  const [usuariosRegistrados, setUsuariosRegistrados] = useState(obtenerUsuariosRegistrados());

  const botonEliminar = (miIndex) => {
    if (window.confirm("¿Está seguro de eliminar este usuario?")) {
      var usuariosFiltrados = usuariosRegistrados.filter((usuario, index) => {
        return miIndex !== index;
      });
      setUsuariosRegistrados(usuariosFiltrados);
    }
  };

  useEffect(() => {
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
  }, [usuariosRegistrados]);

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

      <div className="h3">
        Listado De Usuarios
      </div>

      <div className="table-responsive">

        {usuariosRegistrados.length > 0 ?

          <>
            <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
              <thead className="text-center" style={{ background: "lightgray" }}>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Usuario</th>
                  <th>Contraseña</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody className="text-center align-baseline">
                {
                  usuariosRegistrados.map((usuario, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{usuario.nombre}</td>
                      <td>{usuario.correo}</td>
                      <td>{usuario.usuario}</td>
                      <td>{usuario.contraseña}</td>
                      <td className="text-center">
                        <button className="btn btn-outline-danger" onClick={() => botonEliminar(index)} >
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>

          : <p className='h5' style={{ color: "red" }}>No hay registros de usuarios</p>
        }
      </div>

    </div>
  );
};
