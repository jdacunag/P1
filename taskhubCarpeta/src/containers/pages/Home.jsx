import BotonNuevoProyecto from "../../components/BotonNuevoProyecto"
import titulo from "../../components/Titulo"
import BotonVerProyectos from "../../components/BotonVerProyectos"
import CuadroDeBotones from "../../components/CuadroDeBotones"
import CentrarTexto  from "../../components/CentrarTexto"
import Fondo  from "../../components/Fondo"
import titulo2   from  "../../components/Titulo2"



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
            <button style={BotonVerProyectos}>Ver <br /> proyectos</button>
            <button style={BotonNuevoProyecto}>Nuevo <br /> Proyecto</button>
          </div>
        </div>
      </div>
  
    )
    
}



export default Home;

