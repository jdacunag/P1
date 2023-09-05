import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import TaskList from "./components/TaskList";
import store from "./store";
import { Provider } from "react-redux";


function App() {

  const titulo = {
    color: 'white', // Cambia 'blue' al color que desees
    fontSize: '30px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000000', // Añade sombra al texto
    textAlign: 'center',
    //bajar un poco el texto
    marginTop: '150px',
  };


  const titulo2 = {
     // Añade espaciado
    fontSize: '130px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000000', // Añade sombra al texto
    marginTop: '0px',
  };

  const CuadroDeBotones = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    position: 'relative',
    top: '700px',
    left: '-559px',
    color : 'white',
    backgroundImage: 'url(https://fondosmil.com/fondo/13706.jpg)', // Reemplaza con la ruta de tu imagen
    borderRadius: '30px',
    width: '600px',
    height: '400px',
    fontSize: '30px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000000', // Añade sombra al texto
    opacity: '0.3',
    
  };

  const BotonVerProyectos = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh',
    position: 'relative',
    top: '422px',
    right: '530px',
    button: 'white',
    bottom: '10px',
    fontSize: '35px',
    color : 'white',
    width: '247.22px',
    fontWeight: 'bold',

  };
  
  const BotonNuevoProyecto = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh',
    position: 'relative',
    top: '354px',
    fontSize: '35px',
    right: '180px',
    button: 'white',
    bottom: '10px',
    fontWeight: 'bold',
    color : 'white',

  };

  const CentrarTexto = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    position: 'relative',
    left: '300px',
  };

  const Fondo = {
    backgroundImage: 'url(https://fondosmil.com/fondo/13706.jpg)', // Reemplaza con la ruta de tu imagen
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen de fondo
    backgroundRepeat: 'no-repeat', // Evita la repetición de la imagen de fondo
    // Añade un efecto de desenfoque a la imagen de fondo
    height: '98.5vh', // Ajusta la altura como desees
    width: '100vw', // Ajusta el ancho como desees
  };

  return (

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
  );


  <Provider store={store}>
  <Router >
    <Routes>

      <Route path="*" element={<Error404/>}/>

      <Route path="/tasks" element={<TaskList/>}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  </Router>
  </Provider>
  
}

export default App;
