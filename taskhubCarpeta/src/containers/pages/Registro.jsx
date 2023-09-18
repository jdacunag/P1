import CuadroTexto from "../../components/Registro/CuadroTexto";
import Fondo from "../../components/Registro/Fondo";
import BotonUsuario from "../../components/Registro/BotonUsuario";
import BotonContraseña from "../../components/Registro/BotonContraseña";
import BotonConfirmarContraseña from "../../components/Registro/BotonConfirmarContraseña";
import BotonCorreo from "../../components/Registro/BotonCorreo";
import Titulo from "../../components/Registro/Titulo";
import BotonIngreso from "../../components/Registro/BotonIngreso";

function Registro(){

    return(
       
        <div style={Fondo}>
            <div style={CuadroTexto}>
                <div style={Titulo}>
                    <p>Registro</p>
                </div>
                <div style={BotonCorreo}>
                    <input type="text" placeholder="Email" name="password"/>
                </div>
                <div style={BotonUsuario}>
                    <input type="text" placeholder="username" name="username"/>
                </div>
                <div style={BotonContraseña}>
                    <input type="text" placeholder="password" name="password"/>
                </div>
                <div style={BotonConfirmarContraseña}>
                    <input type="text" placeholder="Confirm password" name="password"/>
                </div>
                <button style={BotonIngreso} type="submit">
                    Siguiente   
                </button>
            </div>
        </div>

    )

}

export default Registro;  