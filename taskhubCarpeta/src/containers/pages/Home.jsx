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
                {userId ? <p>hola | Nombre | </p> : <p> Usuario </p>}
                <br />
                </p>
              </div>
              <div stlye={{...CentrarTexto,}}>  
              <img src="https://cdn.discordapp.com/attachments/726318204397420565/1165829412214808626/image.png?ex=655abb3f&is=6548463f&hm=3a91b74dd93efc21e53a164c3a5be1a166d5c3564ac81592eaa38bd9a48af1dd&" style={{ width: '50vh', height: 'auto', marginLeft: '10.5%', transform: 'translate(95%, 180%)' }} />
              </div>
            <div style={CuadroDeBotones}> 
            <Link to="/verproyectos" style={{...BotonNuevoProyecto, left:'20%'}}>
            <img src="https://cdn.discordapp.com/attachments/726318204397420565/1165827718496145538/image.png?ex=654844ac&is=6535cfac&hm=3ca5e023d4e1fc841e665ad07bb1c34b8bf8e9a13520359f5476ed35e7541af1&" style={{ width: '10vh', height: 'auto', transform: 'translate(80%, -60%)', marginLeft: '-2%'}} />
                <div style={{...CentrarTexto, right:'50%', top:'50%'}}>
                    Ver <br/> proyectos
                </div>
            </Link>
                
            <Link to="/nuevoproyecto" style={{...BotonNuevoProyecto, left:'70%'}}>
            <img src="https://cdn.discordapp.com/attachments/726318204397420565/1165814470510137476/image.png?ex=65483855&is=6535c355&hm=1422c0ce1c25df8eb00228be365d6ee0daf8d3f79dd4ea8af42a7ea8eabd373e&" style={{ width: '10vh', height: 'auto', marginLeft: '10.5%', transform: 'translate(40%, -40%)' }} />
                <div style={{...CentrarTexto, right:'90%', top:'50%'}}>
                    Nuevo <br /> proyecto
                </div>
                

            </Link>
            </div>
        </div>
    );
}

export default Home;
