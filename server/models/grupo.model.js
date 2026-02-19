import database from "../database/conexion.js";

class GrupoModel{
  
  static getGrupos(){
    const query = database.prepare('SELECT * FROM GRUPO;');
    return query.all();
  }


}

export default GrupoModel;