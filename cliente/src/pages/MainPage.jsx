import H1 from "../components/H1";
import H2 from "../components/H2";
import ContestarEncuestaDialog from "../components/ContestarEncuestaDialog";

import useUsuarioStore from "../store/useUsuarioStore";
import useEncuestaStore from "../store/useEncuestaStore";
import useAlumnoStore from "../store/useAlumnoStore";

import { useEffect,useRef, useState } from "react";

function MainPage() {
  const fetchEncuestasByCursoYGrupo = useEncuestaStore(state => state.fetchEncuestasByCursoYGrupo);
  const encuestasCursoGrupo = useEncuestaStore(state => state.encuestasCursoGrupo);
  const alumnosCursoGrupo = useAlumnoStore(state => state.alumnosCursoGrupo);
  const fetchAlumnosByCursoYGrupo = useAlumnoStore(state => state.fetchAlumnosByCursoYGrupo);

  const [openDialog,setOpenDialog] = useState(false);
  const [selectedEncuesta,setSelectedEncuesta] = useState(null);
  const [selectedAlumno,setSelectedAlumno] = useState(null);

  const nombre = useUsuarioStore(state => state.nombre);
  const email = useUsuarioStore(state => state.email);
  const curso = useUsuarioStore(state => state.curso);
  const grupo = useUsuarioStore(state => state.grupo);
  const id_curso = useUsuarioStore(state => state.id_curso);
  const id_grupo = useUsuarioStore(state => state.id_grupo);

  useEffect(() => {
    if(encuestasCursoGrupo.length==0){
      fetchEncuestasByCursoYGrupo(id_curso, id_grupo);
    }
    if(alumnosCursoGrupo.length==0){
      fetchAlumnosByCursoYGrupo(id_curso, id_grupo);
    }
  }, []);

  const refEncuesta = useRef();
  const refAlumno = useRef();

  const mostrarDialogoContestarEncuesta = () =>{
    const id_encuesta = refEncuesta.current.value; 
    const id_alumno   = refAlumno.current.value;

    if(id_encuesta == -1 || id_alumno == -1){
      // TODO: indicar que se debe seleccionar un usuario y encuesta para continuar
      return;
    }
    const encuesta = encuestasCursoGrupo.find( enc=>enc.id == id_encuesta )
    const alumno   = alumnosCursoGrupo.find( alum=>alum.id == id_alumno )
    setOpenDialog(true);
    setSelectedEncuesta(encuesta);
    setSelectedAlumno(alumno);
  }

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
        <div className="flex gap-4">
          <select ref={refEncuesta} className="select select-primary">
            <option disabled selected value={-1}>Selecciona una encuesta</option>
            {encuestasCursoGrupo.map(enc => (
              <option key={enc.id} value={enc.id}>
                {enc.nombre}
              </option>
            ))}
          </select>
          <button className="btn btn-primary btn-square" onClick={()=>fetchEncuestasByCursoYGrupo(id_curso, id_grupo)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-reload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" /></svg></button>
        </div>
      </div>


      {/* //TODO: cambiar este select por una tabla con filtrado por nombre */}
      <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">
        <label className="label">Selecciona un alumno</label>
        <div className="flex gap-4">
          <select ref={refAlumno} className="select select-primary">
            <option disabled selected value={-1}>Selecciona un alumno</option>
            {alumnosCursoGrupo.map(alumno => (
              <option key={alumno.id} value={alumno.id}>
                {alumno.nombre}
              </option>
            ))}
          </select>
          <button className="btn btn-primary btn-square" onClick={()=>fetchAlumnosByCursoYGrupo(id_curso, id_grupo)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-reload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" /><path d="M20 4v5h-5" /></svg></button>
          </div>
      </div>

      <div className="bg-base-200 rounded-box p-4 mx-auto">
        <button type="button" className="btn btn-primary" onClick={mostrarDialogoContestarEncuesta}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>
          Evaluar
        </button>
      </div>

      {/* TODO: Abrir un dialog con las preguntas y que evalúen allí */}
      { openDialog && (
        <ContestarEncuestaDialog 
         encuesta={selectedEncuesta} 
         alumno={selectedAlumno}
         setOpen={setOpenDialog}
        />
      )}
    </>
  );
}

export default MainPage;
