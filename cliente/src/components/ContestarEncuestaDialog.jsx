import H1 from "./H1";
import RatingStars from "./RatingStars";

import useEncuestaStore from "../store/useEncuestaStore";
import { useEffect, useState } from "react";


function ContestarEncuestaDialog({ encuesta, alumno, setOpen }) {

  // const modifyEncuesta = useEncuestaStore(state => state.modifyEncuesta);
  const preguntas = useEncuestaStore(state => state.preguntas);
  const fetchPreguntasById_encuesta = useEncuestaStore(state => state.fetchPreguntasById_encuesta);

  useEffect(()=>{
    fetchPreguntasById_encuesta(encuesta.id);
  },[])
  

  const [notas, setNotas] = useState({});

  //TODO: Cambiar todo esto a una setNotas, notas y limpiarNotas de zustand. LimpiarNotas se ejecutará cada vez que se abra el Dialog
  // Inicializamos el objeto notas con 0 para cada pregunta
  useEffect(() => {
    if (preguntas.length > 0) {
      const notasIniciales = {};
      for(let p of preguntas){
        notasIniciales[p.id] = 0;
      }
      setNotas(notasIniciales);
    }
  }, [preguntas]);


  const actualizarNota = (id_pregunta, valor) => {
    setNotas(prev => ({
      ...prev,
      [id_pregunta]: valor
    }));
  };

  const guardarCambios = () =>{
    //TODO: VALIDAR
    //FIXME: debería cerrarse si el resultado de la operación es correcto
    console.log("Notas finales:", notas);
    setOpen(false);
  }

  return (
    <>
      <dialog open className="modal">
        <div className="modal-box max-w-2xl">
          <H1 className="font-bold text-lg">Contestar encuesta</H1>
          <p className="my-4">Encuesta: {encuesta.nombre}</p>
          <p className="my-4">Alumno: {alumno.nombre}</p>

          <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">
          {
            preguntas.map(p=>{return(
              <div className="p-4 border border-accent rounded">
                <p className="my-4 text-2xl font-medium">{p.nombre}</p>
                <p className="my-4 text-base-content/75">{p.texto}</p>
                <RatingStars 
                name={`pregunta-${p.id}`} 
                onNotaChange={(valor) => actualizarNota(p.id, valor)}
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


