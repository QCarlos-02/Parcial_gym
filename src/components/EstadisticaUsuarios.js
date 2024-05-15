import React, { useState, useEffect } from 'react';

export const EstadisticaUsuarios = () => {

  const obtenerUsuariosRegistrados = () => {
    var datos = localStorage.getItem("usuariosRegistrados");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };

  const [usuariosRegistrados, setUsuariosRegistrados] = useState(obtenerUsuariosRegistrados());

  function miEstadistica(opcion) {
    var resultado = 0;

    if (opcion === 1) {
      resultado = usuariosRegistrados.length;
    } else if (opcion === 2) {
      usuariosRegistrados.forEach(usuario => {
        resultado += parseInt(usuario.edad);
      });
    } else if (opcion === 3) {
      let totalEdades = 0;
      usuariosRegistrados.forEach(usuario => {
        totalEdades += parseInt(usuario.edad);
      });
      resultado = (totalEdades / usuariosRegistrados.length).toFixed(2);
    }

    return resultado;

  }

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

      <div className="h3">
        Resumen Estadístico de Usuarios
      </div>

      <div className="table-responsive">

        {usuariosRegistrados.length > 0 ?

          <div className="row row-cols-1 row-cols-md-3 g-2" style={{ padding: 5, width: "90%", margin: "0 auto" }}>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cantidad de Usuarios Registrados</h5>
                  <p className="card-text"> {miEstadistica(1)} </p>
                </div>
              </div>
            </div>
            
         
          </div>

          : <p className='h5' style={{ color: "red" }}>No hay registros de usuarios</p>

        }
      </div>

    </div>
  );
};
