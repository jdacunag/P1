import React from 'react';
import BotonNuevoProyecto from '../../components/Home/BotonNuevoProyecto';
import titulo from '../../components/Home/Titulo';
import BotonVerProyectos from '../../components/Home/BotonVerProyectos';
import CuadroDeBotones from '../../components/Home/CuadroDeBotones';
import CentrarTexto from '../../components/Home/CentrarTexto';
import Fondo from '../../components/Home/Fondo';
import titulo2 from '../../components/Home/Titulo2';
import { useSession } from '../../hooks/useSession';
import { useNavigate, Link } from 'react-router-dom';



function Home() {
    const { userId, setSecureid  } = useSession();

    console.log(userId);
    return (
        <div style={Fondo}>
            <div style={CentrarTexto}>
                <div style={titulo}>
                    <p>Bienvenido a</p>
                    {userId ? <p>Tu ID de usuario es: {userId}</p> : <p>No has iniciado sesión.</p>}
                    <br />
                    <p style={titulo2}>TaskHub</p>
                    <p>¿Que deseas hacer hoy?</p>
                </div>
                <div>
                    <div style={CuadroDeBotones}></div>
                    <Link to="/verproyectos" style={BotonVerProyectos}>
                    Ver <br /> proyectos
                    </Link>
                    <Link to="/nuevoproyecto" style={BotonNuevoProyecto}>
                    Nuevo <br /> proyectos
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
