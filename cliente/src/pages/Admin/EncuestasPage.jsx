import H2 from "../../components/H2";
import EditarEncuestaDialog from "../../components/EditarEncuestaDialog";

import useCursoYGrupoStore from "../../store/useCursoYGrupoStore";
import useEncuestaStore from "../../store/useEncuestaStore";
import { useEffect, useRef } from "react";

import { useState } from "react";
import { Link } from "wouter";

function EncuestasPage() {
  const fetchGrupos = useCursoYGrupoStore(state => state.fetchGrupos);
  const fetchCursos = useCursoYGrupoStore(state => state.fetchCursos);
  const cursos = useCursoYGrupoStore(state => state.cursos);
  const grupos = useCursoYGrupoStore(state => state.grupos);

  const fetchEncuestas = useEncuestaStore(state=>state.fetchEncuestas);
  const createEncuesta = useEncuestaStore(state=>state.createEncuesta);
  const encuestas = useEncuestaStore(state=>state.encuestas);

  const refCurso = useRef();
  const refGrupo = useRef();
  const refNombre = useRef();
  
  const [openDialog,setOpenDialog] = useState(false);
  const [selectedItem,setSelectedItem] = useState(null);


  // TODO: Ver el Promise.All()
  useEffect(() => {
    fetchEncuestas();
    fetchCursos();
    fetchGrupos();
  }, [fetchCursos, fetchGrupos,fetchEncuestas]);


  const crearEncuesta = () =>{
    //TODO: Validar los datos
    const nombre = refNombre.current.value.trim();
    const id_curso = refCurso.current.value;
    const id_grupo = refGrupo.current.value;

    createEncuesta(nombre,id_curso,id_grupo);

  }

  const mostrarDialogoEditarEncuesta = (encuesta) =>{
    setOpenDialog(true);
    setSelectedItem(encuesta)
  }


  return (
    <>
      <H2>Crear encuesta</H2>


      <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">


      <label className="label">Nombre</label>
      <input ref={refNombre} type="text" className="input" placeholder="Nombre" />
      
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
      </div>

      <div className="my-4 p-4 bg-base-100">
        <button className="btn btn-primary" onClick={crearEncuesta}>Añadir encuesta</button>
      </div>



      <H2>Gestionar encuestas</H2>
    
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Curso</th>
              <th>Grupo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              encuestas.map(enc => {return(
              <tr key={enc.id} className="hover:bg-neutral">
                <th className="font-thin opacity-80 tabular-nums">{enc.id}</th>
                <td>
                  {enc.nombre}
                </td>
                {/*font-semibold*/}
                {/* <td>{(cursos.find(c=>c.id == enc.id_curso))?.nombre}</td> */}
                {/* <td>{(grupos.find(g=>g.id == enc.id_grupo))?.nombre}</td> */}
                <td>{enc.curso}</td>
                <td>{enc.grupo}</td>
                <td className="flex gap-4">
                  <button className="btn btn-primary btn-square" onClick={()=>mostrarDialogoEditarEncuesta(enc)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" /><path d="M16 5l3 3" /></svg>
                  </button>
                  
                  <Link href={"/admin/preguntas/encuesta/"+ enc.id} >
                  <button className="btn btn-primary btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-2-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M14.5 18.5l-2.5 2.5l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" /><path d="M19 22v.01" /><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>
                </button>
                  </Link>

                  <button className="btn btn-primary btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
                  </button>
                  <button className="btn btn-primary btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash-x">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" />
                    </svg>
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>

      { openDialog && (
        <EditarEncuestaDialog encuesta={selectedItem} setOpen={setOpenDialog}>
          <p>Hola caracola</p>
        </EditarEncuestaDialog>
      )}

    </>
  );
}

export default EncuestasPage;
