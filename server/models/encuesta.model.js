import database from "../database/conexion.js";

class EncuestaModel{
  
  static getEncuestas(){
    // const query = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
    // insert.run(1, 'hello');
    // const query = database.prepare('SELECT * FROM ENCUESTA;');
    const query = database.prepare('select encuesta.*, grupo.nombre as grupo, curso.nombre as curso from encuesta LEFT JOIN grupo ON id_grupo=grupo.id LEFT JOIN curso ON curso.id = id_curso;');
    return query.all();
  }


  static createEncuesta(nombre,id_curso,id_grupo){
    const query = database.prepare('INSERT INTO ENCUESTA (nombre, id_curso, id_grupo) VALUES (?, ?, ?)');
    const resultado = query.run(nombre, id_curso,id_grupo); 

    if(resultado.changes==1)
      return resultado.lastInsertRowid;
    else
      return null;
  }


  static getEncuestasByCursoYGrupo(curso, grupo){
    const query = database.prepare('SELECT * FROM ENCUESTA WHERE id_curso=? AND id_grupo=?');
    return query.all(curso, grupo); 
  }


  static modifyEncuesta(id, nombre, id_curso, id_grupo){
    
    const query = database.prepare('UPDATE ENCUESTA SET nombre=?, id_curso=?, id_grupo=? WHERE id=?');
    console.log("yes")
    const resultado = query.run(nombre, id_curso,id_grupo, id); 

    if(resultado.changes==1)
      return {id,nombre,id_curso,id_grupo};
    else
      return null;
  }



}

export default EncuestaModel;