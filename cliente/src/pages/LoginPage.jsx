import H1 from "../components/H1";
import useAlumnoStore from "../store/useAlumnoStore";
import { useLocation } from "wouter";
import { useRef } from "react";

function LoginPage() {

  const loginAlumno = useAlumnoStore((state) => state.loginAlumno);
  
  const [setLocation] = useLocation();
  const refEmail = useRef();
  const refPassword = useRef();

  const gestionarLogin = () =>{
    const email = refEmail.current.value.trim();
    const clave = refPassword.current.value.trim();


    //TODO: VALIDAR

    loginAlumno(email, clave);
    //Si fue correcto:
    setLocation("/main");
  }

  return (
    <>
      <H1>Iniciar sesión</H1>
      <fieldset className="fieldset bg-base-200 border-primary rounded-box w-xs border p-4">
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
