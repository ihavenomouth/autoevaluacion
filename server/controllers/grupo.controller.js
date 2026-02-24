import GrupoModel from "../models/grupo.model.js";

class GrupoController {

  static getGrupos(req,res){
    res.send( GrupoModel.getGrupos() );
  }
}

export default GrupoController;