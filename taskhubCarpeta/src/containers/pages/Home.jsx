import React from 'react';
import BotonNuevoProyecto from '../../components/Home/BotonNuevoProyecto';
import titulo from '../../components/generalidades/Titleloginregister';
import BotonVerProyectos from '../../components/Home/BotonVerProyectos';
import CuadroDeBotones from '../../components/Home/CuadroDeBotones';
import Fondo from '../../components/generalidades/Fondo';
import titulo2 from '../../components/Home/Titulo2';
import { useSession } from '../../hooks/useSession';
import { Link } from 'react-router-dom';

function Home() {
    const { userId } = useSession();
    /* const navigate = useNavigate();
    
    if(!userId){
        navigate('/error404')
    } */
    return (
        <div style={Fondo}>
            <div style={titulo}>
                <p style={titulo2}>Bienvenido a TaskHub ¿Que deseas hacer hoy?
                <br />
                {userId ? <p>hola | Nombre | </p> : <p> colado socio </p>}
                <br />
                </p>
                
              
            </div>
            <div style={CuadroDeBotones}></div>
            <Link to="/verproyectos" style={BotonVerProyectos}>
                Ver <br /> proyectos
            </Link>
            <Link to="/nuevoproyecto" style={BotonNuevoProyecto}>
                Nuevo <br /> proyectos
            </Link>
        </div>
    );
}

export default Home;
