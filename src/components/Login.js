import React, {useState} from 'react'
import {Menu} from './Menu'

export const Login = () => {

  const comprobarSesion = () => {
    var sesion = localStorage.getItem("miLogin");
    if(sesion){
      return JSON.parse(sesion);
    }else{
      return false;
    }
  }

  const [miLogin, setmiLogin] = useState(comprobarSesion());
  const [usu, setUsu] = useState("");
  const [pass, setPass] = useState("");


  function iniciarSesion(e){
    e.preventDefault();
    var textousu = document.getElementById("textousu").value;
    var textopass = document.getElementById("textopass").value;

    if(textousu.length==0  || textopass.length==0){
      alert("Por favor, ingrese los datos faltantes");
    } else{
      if(usu === "admin" && pass==="admin" || usu === "carlos" && pass==="123456" ){
        setmiLogin(true);
        localStorage.setItem("miLogin", true)
        localStorage.setItem("usu", usu)
        document.getElementById("form_login").style.display = "none";
          }else{
          setmiLogin(false);
          alert("Usuario y/o Contraseña no validos")
          document.getElementById("textousu").value = "";
          document.getElementById("textopass").value = "";
          document.getElementById("textousu").focus();
      }
    }

  }

  return (
    <div className="contenedor" style={{background:"lightblue", marginTop:20, padding:20}}>
        
    { miLogin == false ? 

    <form id="form_login">
        <div>
            <h1 style={{color:"black", textalign:"center"}}>GMANAGER</h1>
            <label htmlFor="textousu"><strong>Usuario:</strong></label>
            <input type="text" id="textousu" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setUsu(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="textopass"><strong>Contaseña:</strong></label>
            <input type="password" id="textopass" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setPass(e.target.value)} required/>
        </div><br/>
        <input type="submit" className="btn btn-primary" value="Ingresar" onClick={ iniciarSesion}  />
    </form>

      :
      <Menu/>
    }

</div>
  )
}
