import H2 from "../../components/H2";

import useAlumnoStore from "../../store/useAlumnoStore";
import useCursoYGrupoStore from "../../store/useCursoYGrupoStore";

import { useEffect, useState } from "react";

function ResultadosPage(){
  
  const fetchAlumnos = useAlumnoStore(state => state.fetchAlumnos);
  const alumnos = useAlumnoStore(state => state.alumnos);

  const fetchGrupos = useCursoYGrupoStore(state => state.fetchGrupos);
  const grupos = useCursoYGrupoStore(state => state.grupos);

  const [filtradoPorCurso, setFiltradoPorGrupo] = useState(null);
  const [alumnosFiltrados, setAlumnosFiltrados] = useState([]);

  // useEffect(() => {
  //   fetchAlumnos();
  //   const alumnos = fetchGrupos();
  //   if(alumnos)
  //     setAlumnosFiltrados(alumnos);
  // }, [fetchAlumnos]);


  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // 1. Lanzamos ambas peticiones al mismo tiempo
        // Nota: Promise.all devuelve un array con los resultados de cada promesa
        const [resAlumnos, resGrupos] = await Promise.all([ fetchAlumnos(), fetchGrupos() ]);
  
        // 2. Ahora que AMBAS han terminado, actualizamos el estado local
        if (resAlumnos) {
          setAlumnosFiltrados(resAlumnos);
        }
      } catch (error) {
        console.error("Error cargando datos en paralelo:", error);
      }
    };
  
    cargarDatos();
    
    // Agregamos ambas funciones a las dependencias si vienen de props o stores
  }, [fetchAlumnos, fetchGrupos]);



  function filtrar(e){
    const texto=e.target.value;
    setAlumnosFiltrados( alumnos.filter(a=>a.nombre.includes(texto) || a.curso.includes(texto) || a.grupo.includes(texto) )  )
    setFiltradoPorGrupo(null);
  }

  function filtrarAlumnoPorGrupo(grupo){
    setFiltradoPorGrupo(grupo);
    setAlumnosFiltrados( alumnos.filter(a=>a.grupo == grupo)  );
  }


  return(<>
    <H2>Ver resultados</H2>

    <div className="my-4">
      <label>Buscar: &nbsp; &nbsp;
        <input type="text" placeholder="Filtrar" className="input" onInput={filtrar}/>
      </label>
    </div>

    <div className="flex gap-4 flex-wrap">{
      grupos.map(g=>(   
        <div 
        // onClick={()=>}
        onClick={ ()=>{
          filtrarAlumnoPorGrupo(g.nombre)
        }}
        className=
        {
          filtradoPorCurso==g.nombre
          ? "badge badge-primary cursor-pointer"
          : "badge badge-soft badge-secondary cursor-pointer hover:badge-primary"
        }
        // className="badge badge-outline badge-secondary cursor-pointer hover:badge-primary"

        >{g.nombre}</div>
      ))
      }
    </div>

    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Alumno</th>
              <th>Curso</th>
              <th>Grupo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosFiltrados.map(a => {return(
              <tr key={a.id} className="hover:bg-base-300">
                <th className="font-thin opacity-80 tabular-nums">{a.id}</th>
                <td>
                  <span className="font-semibold">{a.nombre}</span> ({a.email})
                </td>
                {/*font-semibold*/}
                <td>{a.curso}</td>
                <td>{a.grupo}</td>
                <td className="flex gap-4">
                  <button className="btn btn-primary btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash-x">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" />
                    </svg>
                  </button>
                  <button className="btn btn-primary btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" /><path d="M16 5l3 3" /></svg>
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>

  </>)
}

export default ResultadosPage;