import H1 from "./H1";

import { useRef } from "react";
import useCursoYGrupoStore from "../store/useCursoYGrupoStore";
import useEncuestaStore from "../store/useEncuestaStore";


function EditarEncuestaDialog({ encuesta, setOpen }) {

  const cursos = useCursoYGrupoStore(state => state.cursos);
  const grupos = useCursoYGrupoStore(state => state.grupos);
  const modifyEncuesta = useEncuestaStore(state => state.modifyEncuesta);

  const refNombre = useRef();
  const refCurso = useRef();
  const refGrupo = useRef();


  const guardarCambios = () =>{
    //TODO: VALIDAR
    const nombre = refNombre.current.value.trim();
    const id_curso = refCurso.current.value;
    const id_grupo = refGrupo.current.value;

    modifyEncuesta(encuesta.id, nombre, id_curso, id_grupo);
    //FIXME: debería cerrarse si el resultado de la operación es correcto
    setOpen(false);
  }


  //FIXME: El curso seleccionado no siempre es el que debería. Probablemente haya que esperar la hidratación?
  return (
    <>
      <dialog open className="modal">
        <div className="modal-box">
          <H1 className="font-bold text-lg">Editar encuesta</H1>
          <p className="my-4">Datos de la encuesta (id: {encuesta.id})</p>

          <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">

          <label className="label">Nombre</label>
          <input ref={refNombre} type="text" className="input" defaultValue={encuesta.nombre} />

          <label className="label">Selecciona un curso</label>
          <select ref={refCurso} className="select select-primary">
            {cursos.map(c => (
            <option key={c.id} value={c.id} selected={ c.id==encuesta.id_curso?true:false }>
              {c.nombre}
            </option>
            ))}
          </select>

          <label className="label">Selecciona un grupo</label>
          <select ref={refGrupo} className="select select-primary">
            {grupos.map(g => (
              <option key={g.id} value={g.id} selected={ g.id==encuesta.id_grupo?true:false }>
                {g.nombre}
              </option>
            ))}
          </select>
        </div>
          


          <div className="modal-action">
            <form method="dialog" className="flex gap-4">
              <button className="btn btn-neutral" onClick={() => setOpen(false)}>Cerrar</button>
              <button className="btn btn-primary" onClick={guardarCambios}>Guardar</button>
            </form>
          </div>
        </div>
 
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default EditarEncuestaDialog;



