import database from "../database/conexion.js";

class CursoModel{
  
  static getCursos(){
    const query = database.prepare('SELECT * FROM CURSO;');
    return query.all();
  }

  static createCurso(nombre){
    const query = database.prepare('INSERT INTO CURSO(nombre) VALUES(?);');
    const resultado = query.run(nombre);

    if(resultado.changes==1)
      return resultado.lastInsertRowid;
    else
      return null;
  }


}

export default CursoModel;