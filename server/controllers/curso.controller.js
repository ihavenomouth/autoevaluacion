import CursoModel from "../models/curso.model.js";

class CursoController {

  
  static getCursos(req,res){
    res.send(CursoModel.getCursos());
  }


  static createCurso(req,res){
    
    const nombre = req.body.nombre;

    if(!req.admin){
      res.status(401).send("Sólo el administrador puede crear un curso")
      return;
    }

    const id_curso = CursoModel.createCurso(nombre)
    
    if( id_curso){
      res.send({id:id_curso, nombre:nombre});
    }
    else{
      res.status(500).send("No se pudo crear el curso en la base de datos")
    }
  
  }
}

export default CursoController;