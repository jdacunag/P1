import React from 'react';
import BotonNuevoProyecto from "../../components/Home/BotonNuevoProyecto"
import titulo from "../../components/Home/Titulo"
import BotonVerProyectos from "../../components/Home/BotonVerProyectos"
import CuadroDeBotones from "../../components/Home/CuadroDeBotones"
import CentrarTexto  from "../../components/Home/CentrarTexto"
import Fondo  from "../../components/Home/Fondo"
import titulo2   from  "../../components/Home/Titulo2"



function VerProyectos() {
  window.location.href = "/VerProyectos";
}

function NuevoProyecto() {
  window.location.href = "/NuevoProyecto";
}

function Home() {

    return(
        <div style={Fondo}>
        <div style={CentrarTexto}>
          <div style={titulo}> 
            <p>Bienvenido a</p>
              <br />
            <p style={titulo2}>TaskHub</p>
            <p>¿Que deseas hacer hoy?</p>
          </div>
          <div>
            <div style={CuadroDeBotones}>
            </div>
            <button style={BotonVerProyectos} onClick={VerProyectos}>Ver <br /> proyectos</button>
            <button style={BotonNuevoProyecto} onClick={NuevoProyecto} >Nuevo <br /> Proyecto</button>
          </div>
        </div>
      </div>
    )
    
}



export default Home;

