import H1 from "../components/H1";
import H2 from "../components/H2";

import useUsuarioStore from "../store/useUsuarioStore";
import useEncuestaStore from "../store/useEncuestaStore";

import { useEffect,useRef } from "react";

function MainPage() {
  const fetchEncuestasByCursoYGrupo = useEncuestaStore(state => state.fetchEncuestasByCursoYGrupo);
  const encuestasCursoGrupo = useEncuestaStore(state => state.encuestasCursoGrupo);

  const nombre = useUsuarioStore(state => state.nombre);
  const email = useUsuarioStore(state => state.email);
  const curso = useUsuarioStore(state => state.curso);
  const grupo = useUsuarioStore(state => state.grupo);
  const id_curso = useUsuarioStore(state => state.id_curso);
  const id_grupo = useUsuarioStore(state => state.id_grupo);

  useEffect(() => {
    fetchEncuestasByCursoYGrupo(id_curso, id_grupo);
  }, [fetchEncuestasByCursoYGrupo, id_curso, id_grupo]);

  const refEncuesta = useRef();

  return (
    <>
      <H1>Página principal</H1>

      <H2>Datos del usuario actual</H2>

      <div className="bg-base-100 rounded-box p-4 mx-auto my-4 grid grid-cols-2">
        <p>
          <span className="font-bold">Nombre:</span> {nombre}
        </p>
        <p>
          <span className="font-bold">E-mail:</span> {email}
        </p>
        <p>
          <span className="font-bold">Curso:</span> {curso}
        </p>
        <p>
          <span className="font-bold">Grupo:</span> {grupo}
        </p>
      </div>

      <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">

        <label className="label">Selecciona una encuesta</label>
        <select ref={refEncuesta} className="select select-primary">
          <option disabled>Selecciona una encuesta</option>
          {encuestasCursoGrupo.map(enc => (
            <option key={enc.id} value={enc.id}>
              {enc.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default MainPage;
