import CursoModel from "../models/curso.model.js";

class CursoController {

  static getCursos(req,res){
    res.send(CursoModel.getCursos());
  }
}

export default CursoController;