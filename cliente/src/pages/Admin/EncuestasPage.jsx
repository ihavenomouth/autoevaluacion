import H2 from "../../components/H2";
import useCursoYGrupoStore from "../../store/useCursoYGrupoStore";
import { useEffect, useRef } from "react";

function EncuestasPage() {
  const fetchGrupos = useCursoYGrupoStore(state => state.fetchGrupos);
  const fetchCursos = useCursoYGrupoStore(state => state.fetchCursos);
  const cursos = useCursoYGrupoStore(state => state.cursos);
  const grupos = useCursoYGrupoStore(state => state.grupos);

  const refCurso = useRef();
  const refGrupo = useRef();

  useEffect(() => {
    fetchCursos();
    fetchGrupos();
  }, [fetchCursos, fetchGrupos]);

  return (
    <>
      <H2>Gestionar encuestas</H2>
      <div>
        <label className="label">Selecciona un curso</label>
        <select ref={refCurso} className="select select-primary">
          {cursos.map(c => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="label">Selecciona un grupo</label>
        <select ref={refGrupo} className="select select-primary">
          {grupos.map(g => (
            <option key={g.id} value={g.id}>
              {g.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default EncuestasPage;
