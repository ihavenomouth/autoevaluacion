import H2 from "../../components/H2";
import EditarPreguntaDialog from "../../components/EditarPreguntaDialog";


import useEncuestaStore from "../../store/useEncuestaStore";
import { useRef,useState, useEffect } from "react";

function PreguntasPage({id_encuesta}){
  const encuesta = useEncuestaStore(state => 
    state.encuestas.find(e => e.id == id_encuesta)
  );

  const createPregunta = useEncuestaStore(state=>state.createPregunta);
  const fetchPreguntasById_encuesta = useEncuestaStore(state=>state.fetchPreguntasById_encuesta);
  const removePregunta = useEncuestaStore(state=>state.removePregunta);
  const preguntas = useEncuestaStore(state=>state.preguntas);

  const [openDialog,setOpenDialog] = useState(false);
  const [selectedItem,setSelectedItem] = useState(null);


  useEffect(() => {
    fetchPreguntasById_encuesta(id_encuesta);
  }, [fetchPreguntasById_encuesta, id_encuesta]);
  
  const refNombre = useRef();
  const refTexto = useRef();
  const refPeso = useRef();

  const crearPregunta = () =>{
    //TODO: Validar los datos
    const nombre = refNombre.current.value.trim();
    const texto = refTexto.current.value;
    const peso = refPeso.current.value;

    createPregunta(id_encuesta,nombre,texto,peso);
  }

  const mostrarDialogoEditarPregunta = (pregunta) =>{
    setOpenDialog(true);
    setSelectedItem(pregunta)
  }

  const eliminarPregunta=(id)=>{
    removePregunta(id);
  }


  return(<>
    <H2>Datos de la encuesta</H2>

    <div className="bg-base-100 rounded-box p-4 mx-auto my-4 grid grid-cols-2">
      <p><span className="font-bold">Id:</span> {id_encuesta}</p>
      <p><span className="font-bold">Nombre:</span> {encuesta?.nombre}</p>
      <p><span className="font-bold">Curso:</span> {encuesta?.curso}</p>
      <p><span className="font-bold">Grupo:</span> {encuesta?.grupo}</p>
    </div>

    <H2>Añadir preguntas</H2>

    <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">

      <label className="label">Nombre</label>
      <input ref={refNombre} type="text" className="input" placeholder="Nombre" />

      <label className="label">Texto</label>
      <input ref={refTexto} type="text" className="input" placeholder="Texto" />

      <label className="label">Peso</label>
      <input ref={refPeso} type="number" className="input" defaultValue="1" />

    </div>

    <div className="my-4 p-4 bg-base-100">
      <button className="btn btn-primary" onClick={crearPregunta}>Añadir pregunta</button>
    </div>


      <H2>Gestionar preguntas</H2>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-4">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Texto</th>
              <th className="text-right">Peso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              preguntas.map(preg => {return(
              <tr key={preg.id} className="hover:bg-neutral">
                <th className="font-thin opacity-80 tabular-nums">{preg.id}</th>
                <td>
                  {preg.nombre}
                </td>
                <td>{preg.texto}</td>
                <td className="text-right">{preg.peso}</td>
                <td className="flex gap-4">
                  <button className="btn btn-primary btn-square" onClick={()=>mostrarDialogoEditarPregunta(preg)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" /><path d="M16 5l3 3" /></svg>
                  </button>
                  <button className="btn btn-primary btn-square" onClick={()=>eliminarPregunta(preg.id)}>
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
        <EditarPreguntaDialog pregunta={selectedItem} setOpen={setOpenDialog}>
          <p>Hola caracola</p>
        </EditarPreguntaDialog>
      )}


  </>)
}

export default PreguntasPage;