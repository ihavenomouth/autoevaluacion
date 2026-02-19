import database from "../database/conexion.js";

class CursoModel{
  
  static getCursos(){
    const query = database.prepare('SELECT * FROM CURSO;');
    return query.all();
  }


}

export default CursoModel;