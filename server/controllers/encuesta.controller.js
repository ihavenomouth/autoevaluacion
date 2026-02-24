import EncuestaModel from "../models/encuesta.model.js";



class EncuestaController {

  static getEncuestas(req,res){
    const encuestas = EncuestaModel.getEncuestas();
    console.log(encuestas);
    res.send(encuestas);
  }


  static getEncuestasByCursoYGrupo(req,res){
    const curso = req.params.curso;  // VALIDAR
    const grupo = req.params.grupo;
    const encuestas = EncuestaModel.getEncuestaByCursoYGrupo(curso, grupo);
    if(encuestas.length!=0)
      res.send(encuestas);
    else
      res.status(404).send("No se encuentran encuestas de ese grupo y curso.");
  }




  // static createEncuesta(req,res){
  //   const {nombre,email,clave,id_curso,id_grupo} = req.body;
  //   const encuesta = EncuestaModel.createEncuesta(nombre,email,clave,id_curso,id_grupo);
  //   res.send(encuesta);
  // }

  // static removeEncuesta(req,res){
  //   res.send({});
  // }

  // static modifyEncuesta(req,res){
  //   res.send({});
  // }

}

export default EncuestaController;