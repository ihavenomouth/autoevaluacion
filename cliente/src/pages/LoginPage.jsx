import H1 from "../components/H1";
import useUsuarioStore from "../store/useUsuarioStore";
import { useLocation } from "wouter";
import { useEffect, useRef } from "react";

function LoginPage() {

  const loginAlumno = useUsuarioStore((state) => state.loginAlumno);
  const email = useUsuarioStore(state => state.email);
  
  const [location, setLocation] = useLocation();
  const refEmail = useRef();
  const refPassword = useRef();

  const gestionarLogin = () =>{
    const emailLogin = refEmail.current.value.trim();
    const claveLogin = refPassword.current.value.trim();

    //TODO: VALIDAR

    loginAlumno(emailLogin, claveLogin);
  }

  //Redirigimos a la página principal si tuvimos éxito al hacer login
  useEffect(()=>{
    if(email)
      setLocation("/main")}
  ,[email,setLocation])

  

  return (
    <>
      <H1>Iniciar sesión</H1>
      <fieldset className="fieldset bg-base-200 border-primary rounded-box w-xs border p-4 mx-auto">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input ref={refEmail} type="email" className="input" placeholder="Email" />

        <label className="label">Clave</label>
        <input ref={refPassword} type="password" className="input" placeholder="Clave" />

        <button className="btn btn-primary mt-4" onClick={gestionarLogin}>Iniciar sesión</button>
      </fieldset>
    </>
  );
}

export default LoginPage;
