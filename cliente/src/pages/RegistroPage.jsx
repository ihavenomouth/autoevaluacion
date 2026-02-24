import { useLocation } from "wouter";
import H1 from "../components/H1";
import useAlumnoStore from "../store/useAlumnoStore";
import useCursoYGrupoStore from "../store/useCursoYGrupoStore";
import { useEffect, useRef } from "react";

function RegistroPage() {
  const createAlumno = useAlumnoStore((state) => state.createAlumno);
  const fetchGrupos = useCursoYGrupoStore((state) => state.fetchGrupos);
  const fetchCursos = useCursoYGrupoStore((state) => state.fetchCursos);
  const cursos = useCursoYGrupoStore((state) => state.cursos);
  const grupos = useCursoYGrupoStore((state) => state.grupos);

  useEffect(() => {
    fetchCursos();
    fetchGrupos();
  }, []);


  const [location, setLocation] = useLocation();


  const refNombre = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refPassword2 = useRef();
  const refCurso = useRef();
  const refGrupo = useRef();

  const gestionarRegistro = () => {

    const nombre = refNombre.current.value.trim();
    const email = refEmail.current.value.trim();
    const password = refPassword.current.value.trim();
    const password2 = refPassword2.current.value.trim();
    const id_curso = refCurso.current.value;
    const id_grupo = refGrupo.current.value;

    //TODO: VALIDAR
    if(password!=password2) 
      return

    createAlumno(nombre, email, password, id_curso, id_grupo);
    setLocation("/main");
  };

  return (
    <>
      <H1>Crear cuenta</H1>
      <fieldset className="fieldset bg-base-200 border-primary rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Nombre</label>
        <input ref={refNombre} type="text" className="input" placeholder="Nombre" />

        <label className="label">Email</label>
        <input ref={refEmail} type="email" className="input" placeholder="Email" />

        <label className="label">Clave</label>
        <input ref={refPassword} type="password" className="input" placeholder="Clave" />

        <label className="label">Confirmar clave</label>
        <input ref={refPassword2} type="password" className="input" placeholder="Confirmar clave" />

        <label className="label">Selecciona un curso</label>
        <select ref={refCurso} className="select select-primary">
          {cursos.map(c => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>

        <label className="label">Selecciona un grupo</label>
        <select ref={refGrupo} className="select select-primary">
          {grupos.map(g => (
            <option key={g.id} value={g.id}>
              {g.nombre}
            </option>
          ))}
        </select>

        <button className="btn btn-primary mt-4" onClick={gestionarRegistro}>
          Crear cuenta
        </button>
      </fieldset>
    </>
  );
}

export default RegistroPage;
