import H1 from "./H1";

import { useRef } from "react";
import useEncuestaStore from "../store/useEncuestaStore";


function EditarEncuestaDialog({ pregunta, setOpen }) {

  const modifyPregunta = useEncuestaStore(state => state.modifyPregunta);

  const refNombre = useRef();
  const refTexto = useRef();
  const refPeso = useRef();

  


  const guardarCambios = () =>{
    //TODO: VALIDAR
    const nombre = refNombre.current.value.trim();
    const texto = refTexto.current.value;
    const peso = refPeso.current.value;

    modifyPregunta(pregunta.id, nombre, texto, peso, pregunta.id_encuesta);
    //FIXME: debería cerrarse si el resultado de la operación es correcto
    setOpen(false);
  }

  return (
    <>
      <dialog open className="modal">
        <div className="modal-box">
          <H1 className="font-bold text-lg">Editar pregunta</H1>
          <p className="my-4">Datos de la pregunta (id: {pregunta.id})</p>

          <div className="fieldset bg-base-200 rounded-box p-4 mx-auto">

          <label className="label">Nombre</label>
          <input ref={refNombre} type="text" className="input" defaultValue={pregunta.nombre} />

          <label className="label">Texto</label>
          <input ref={refTexto} type="text" className="input" defaultValue={pregunta.texto} />

          <label className="label">Peso</label>
          <input ref={refPeso} type="number" className="input" defaultValue={pregunta.peso} />

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



