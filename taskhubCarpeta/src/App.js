import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import TaskList from "./components/TaskList";
import store from "./store";
import { Provider } from "react-redux";
import VerProyectos from "./containers/pages/VerProyectos";

function App() {

  return (

    <Provider store={store}>
    <Router >
      <Routes>
  
        <Route path="*" element={<Error404/>}/>
  
        <Route path="/tasks" element={<TaskList/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/VerProyectos" element={<VerProyectos/>}/>
      </Routes>
    </Router>
    </Provider>

  );




}

export default App;
