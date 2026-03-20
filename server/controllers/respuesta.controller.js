import RespuestaModel from "../models/respuesta.model.js";



class RespuestaController {

  static getRespuestasById_encuesta(req,res){
    if(!req.admin){
      res.status(401).send("Sólo el administrador puede ver las respuestas");
      return;
    }

    const id_encuesta = req.params.id_encuesta;
    const respuestas = RespuestaModel.getRespuestasById_encuesta(id_encuesta);
    res.send(respuestas);
  }



  static createRespuestas(req,res){

    const respuestas = req.body; //Es un array de objetos {id_pregunta, id_alumno,id_alumno_evaluado, nota}
    // console.log(respuestas);
    const inserciónMasivaCorrecta = RespuestaModel.createRespuestas(respuestas);
    if( inserciónMasivaCorrecta ){
      res.send("Creación de respuestas correcta");
    }
    else{
      res.status(500).send("No se pudo crear las respuestas en la base de datos")
    }
  }
  


}

export default RespuestaController;