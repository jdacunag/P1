import React from "react";
import Fondo from "../../components/Login/Fondo";
import CuadroTexto from "../../components/Login/CuadroTexto";
import BotonIngreso from "../../components/Login/BotonIngreso";
import BotonUsuario  from "../../components/Login/BotonUsuario";
import LoginUser from "../../components/Login/LoginUser";
import BotonContraseña from "../../components/Login/BotonContraseña";
import LoginPassword from "../../components/Login/LoginPassword";


function iraHome(){
    window.location.href = "/Home";
}

function Login() {

    return(
        <div style={Fondo}>
        <div>
            <div style={CuadroTexto}>
                <div  style={BotonUsuario} >
                    <LoginUser />
                </div>
                <div style={BotonContraseña}>
                    <LoginPassword />
                </div>
            </div>
            <button style={BotonIngreso}onClick={iraHome}>Ingreso</button>
        </div>
        </div>
    )


}

export default Login;