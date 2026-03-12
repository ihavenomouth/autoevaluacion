import EncuestaModel from "../models/encuesta.model.js";



class EncuestaController {

  static getEncuestas(req,res){
    const encuestas = EncuestaModel.getEncuestas();
    // console.log(encuestas);
    res.send(encuestas);
  }


  static getEncuestasByCursoYGrupo(req,res){
    const id_curso = req.params.id_curso;  // TODO: VALIDAR
    const id_grupo = req.params.id_grupo;
    const encuestas = EncuestaModel.getEncuestasByCursoYGrupo(id_curso, id_grupo);
    // if(encuestas.length!=0)
    res.send(encuestas);
    // else
      // res.status(404).send("No se encuentran encuestas de ese grupo y curso.");
  }




  static createEncuesta(req,res){
    if(!req.admin){
      res.status(401).send("Sólo el administrador puede crear una encuesta");
      return;
    }

    const {nombre,id_curso,id_grupo} = req.body;
    const id_encuesta = EncuestaModel.createEncuesta(nombre,id_curso,id_grupo);
    if( id_encuesta){
      res.send({id:id_encuesta, nombre:nombre, id_curso, id_grupo});
    }
    else{
      res.status(500).send("No se pudo crear la encuesta en la base de datos")
    }
  }
  

  // static removeEncuesta(req,res){
  //   res.send({});
  // }

  static modifyEncuesta(req,res){
    if(!req.admin){
      res.status(401).send("Sólo el administrador puede modificar una encuesta");
      return;
    }
    
    const {id,nombre,id_curso,id_grupo} = req.body;
    
    const encuestaModificada = EncuestaModel.modifyEncuesta(id,nombre,id_curso,id_grupo);
    if( encuestaModificada ){
      res.send(encuestaModificada);
    }
    else{
      res.status(500).send("No se pudo modificar la encuesta en la base de datos")
    }
  }

}

export default EncuestaController;