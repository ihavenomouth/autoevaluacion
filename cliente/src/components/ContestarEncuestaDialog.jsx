import H1 from "./H1";
import RatingStars from "./RatingStars";

import useEncuestaStore from "../store/useEncuestaStore";
import useUsuarioStore from "../store/useUsuarioStore";
import { useEffect } from "react";


function ContestarEncuestaDialog({ encuesta, alumno, setOpen }) {

  // const modifyEncuesta = useEncuestaStore(state => state.modifyEncuesta);
  const preguntas = useEncuestaStore(state => state.preguntas);
  const fetchPreguntasById_encuesta = useEncuestaStore(state => state.fetchPreguntasById_encuesta);
  
  const setNotaRespuesta = useEncuestaStore(state => state.setNotaRespuesta);
  const inicializarRespuestas = useEncuestaStore(state => state.inicializarRespuestas);
  const createRespuestas = useEncuestaStore(state => state.createRespuestas);
  
  const id_usuario = useUsuarioStore(state => state.id);



  useEffect(() => {
    const cargarYPreparar = async () => {
      // 1. Obtenemos las preguntas
      const arrPreguntas = await fetchPreguntasById_encuesta(encuesta.id);
      
      // 2. Si la carga fue exitosa, inicializamos las respuestas en el store
      if (arrPreguntas) {
        inicializarRespuestas(arrPreguntas, id_usuario, alumno.id);
      }
    };

    cargarYPreparar();
  }, [encuesta.id, id_usuario, alumno.id]);



  const guardarCambios = () =>{
    //TODO: VALIDAR
    //FIXME: debería cerrarse si el resultado de la operación es correcto
    const respuestas = useEncuestaStore.getState().respuestas; //TODO: Quitar esto, que no es necesario
    console.log("Notas finales:", respuestas);
    createRespuestas(); // las respuestas están en el store
    setOpen(false);
  }

  return (
    <>
      <dialog open className="modal">
        <div className="modal-box max-w-2xl">
          <H1 className="font-bold text-lg">Contestar encuesta</H1>
          <p className="my-4"><span className="font-semibold text-primary">Encuesta:</span> {encuesta.nombre}</p>
          <p className="my-4"><span className="font-semibold text-primary">Alumno:</span> {alumno.nombre}</p>

          <p className="my-4 bg-base-200 rounded p-2"><span className="font-semibold text-primary">Importante:</span> una vez contestada la encuesta, no se puede volver a realizar.</p>

          <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">
          {
            preguntas.map(p=>{return(
              <div className="p-4 border border-primary rounded">
                <p className="my-4 text-2xl font-medium">{p.nombre}</p>
                <p className="my-4 text-base-content/75">{p.texto}</p>
                <RatingStars 
                name={`pregunta-${p.id}`} 
                onNotaChange={(nota) => setNotaRespuesta(p.id, nota)}
                />
              </div>
            )})
          }
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

export default ContestarEncuestaDialog;


