import PreguntaModel from "../models/pregunta.model.js";



class PreguntaController {

  static getPreguntasById_encuesta(req,res){
    const id_encuesta = req.params.id_encuesta;
    const preguntas = PreguntaModel.getPreguntasById_encuesta(id_encuesta);
    res.send(preguntas);
  }


  // static getEncuestasByCursoYGrupo(req,res){
  //   const curso = req.params.curso;  // VALIDAR
  //   const grupo = req.params.grupo;
  //   const encuestas = EncuestaModel.getEncuestaByCursoYGrupo(curso, grupo);
  //   if(encuestas.length!=0)
  //     res.send(encuestas);
  //   else
  //     res.status(404).send("No se encuentran encuestas de ese grupo y curso.");
  // }




  static createPregunta(req,res){
    if(!req.admin){
      res.status(401).send("Sólo el administrador puede crear una pregunta");
      return;
    }

    const {id_encuesta, nombre, texto, peso} = req.body;
    const id_pregunta = PreguntaModel.createPregunta(id_encuesta, nombre, texto, peso);
    if( id_pregunta ){
      res.send({id:id_pregunta, id_encuesta, nombre, texto, peso});
    }
    else{
      res.status(500).send("No se pudo crear la pregunta en la base de datos")
    }
  }
  

  static removePregunta(req,res){
    if(!req.admin){
      res.status(401).send("Sólo el administrador puede eliminar una pregunta");
      return;
    }

    const id = req.params.id;
    
    const id_preguntaEliminada = PreguntaModel.removePregunta(id);
    if( id_preguntaEliminada ){
      res.send({id:id_preguntaEliminada});
    }
    else{
      res.status(500).send("No se pudo eliminar la pregunta de la base de datos")
    }

  }



  static modifyPregunta(req,res){
    if(!req.admin){
      res.status(401).send("Sólo el administrador puede modificar una pregunta");
      return;
    }
    
    const {id, nombre, texto, peso,id_encuesta} = req.body;
    
    const encuestaModificada = PreguntaModel.modifyPregunta(id, nombre, texto, peso, id_encuesta);
    if( encuestaModificada ){
      res.send(encuestaModificada);
    }
    else{
      res.status(500).send("No se pudo modificar la encuesta en la base de datos")
    }
  }

}

export default PreguntaController;