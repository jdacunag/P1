import React from 'react';
import BotonNuevoProyecto from '../../components/Home/BotonNuevoProyecto';
import titulo from '../../components/generalidades/Titleloginregister';
import BotonVerProyectos from '../../components/Home/BotonVerProyectos';
import CuadroDeBotones from '../../components/Home/CuadroDeBotones';
import Fondo from '../../components/generalidades/Fondo';
import titulo2 from '../../components/Home/Titulo2';
import { useSession } from '../../hooks/useSession';
import { Link } from 'react-router-dom';
import CentrarTexto from '../../components/Home/CentrarTexto';

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
                <div>
                    <img src="https://cdn.discordapp.com/attachments/726318204397420565/1165829823525040128/image.png?ex=654846a1&is=6535d1a1&hm=d762c0bb65bf1637ae32e19b2a7feaaf73cc5b8c7466815f9fad6714cc899f99&" style={{ width: '500px', height: 'auto', justifyContent:'center', marginLeft: '10%', marginTop: '55%'}} />
                </div>
              </div>  
            <div style={CuadroDeBotones}></div>
            <Link to="/verproyectos" style={BotonVerProyectos}>
                Ver <br/> proyectos
            </Link>
            <div style = {CentrarTexto}>
                <img src="https://cdn.discordapp.com/attachments/726318204397420565/1165827718496145538/image.png?ex=654844ac&is=6535cfac&hm=3ca5e023d4e1fc841e665ad07bb1c34b8bf8e9a13520359f5476ed35e7541af1&" style={{ width: '120px', height: 'auto', justifyContent:'center', marginLeft: '-2%', marginTop: '4%'}} />
                <img src="https://cdn.discordapp.com/attachments/726318204397420565/1165814470510137476/image.png?ex=65483855&is=6535c355&hm=1422c0ce1c25df8eb00228be365d6ee0daf8d3f79dd4ea8af42a7ea8eabd373e&" style={{ width: '100px', height: 'auto', justifyContent:'center', marginLeft: '14.5%', marginTop: '4%'   }} />

            </div>
            <Link to="/nuevoproyecto" style={BotonNuevoProyecto}>
                Nuevo <br /> proyecto
            </Link>
        </div>
    );
}

export default Home;
