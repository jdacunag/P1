import Fondo from "../../components/Login/Fondo";
import CuadroTexto from "../../components/Login/CuadroTexto";
import BotonIngreso from "../../components/Login/BotonIngreso";
import BotonUsuario from "../../components/Login/BotonUsuario";
import LoginUser from "../../components/Login/LoginUser";
import BotonContraseña from "../../components/Login/BotonContraseña";
import LoginPassword from "../../components/Login/LoginPassword";
import { useForm } from "react-hook-form";
import { verificarUser } from "../../api/task.api"; 
import axios from 'axios'

function iraHome() {
  window.location.href = "/Home";
}

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit( async(data) => {
    try{ 
    const res = await verificarUser(data)
    if(res.boolean == "true") {
      iraHome();
    }else{
      console.log(res.boolean)
      console.log("error")
    }
  }catch(e){
  }
  });


  return (
    <div style={Fondo}>
        <form onSubmit={onSubmit}>
        <div>
          <div style={CuadroTexto}>
            <div style={BotonUsuario}>
            <input type="text" placeholder="username" name="username"
               {...register("username", {required: true})} style={LoginUser}/>
            </div>
            <div style={BotonContraseña}>
              <input type="text" placeholder="password" name="password"
               {...register("password", {required: true}) } style = {LoginPassword} />
            </div>
          </div>
          <button style={BotonIngreso} type="submit">
            Ingreso
          </button>
          
        </div>
        </form>
    </div>
  );
}

export default Login;
