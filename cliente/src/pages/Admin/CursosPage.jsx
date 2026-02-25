import { useEffect } from "react";
import H2 from "../../components/H2";
import useCursoYGrupoStore from "../../store/useCursoYGrupoStore";

function CursosPage() {
  const fetchCursos = useCursoYGrupoStore(state => state.fetchCursos);
  const cursos = useCursoYGrupoStore(state => state.cursos);

  useEffect(() => {
    fetchCursos();
  }, []);

  return (
    <>
      <H2>Crear cursos</H2>

      {/* TODO: terminar añadir curso */}
      <div className="my-4 p-4 bg-base-100">
        <button className="btn btn-primary">Añadir curso</button>
      </div>

      <H2>Gestionar cursos</H2>

      <p><strong>Importante:</strong> al eliminar un curso se eliminará toda la información asociada (alumnos, encuestas,etc.).</p>

      <ul className="list bg-base-100 rounded-box shadow-md mx-auto max-w-2xl my-4">
        <li className="p-4 pb-2 text-xs opacity-80 tracking-wide">Cursos existentes en la base de datos</li>

        {cursos.map(c => {
          return (
            <li className="list-row items-center hover:bg-neutral" key={c.id}>
              <div className="font-thin opacity-80 tabular-nums">{c.id}</div>
              <div className="list-col-grow"> {/*font-semibold*/}
                <span>{c.nombre}</span>
              </div>
              <div className="flex-none">
                <button className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" /></svg> Eliminar</button> {/*btn-square*/}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CursosPage;
