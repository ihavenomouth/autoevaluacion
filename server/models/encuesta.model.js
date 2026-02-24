import database from "../database/conexion.js";

class EncuestaModel{
  
  static getEncuestas(){
    // const query = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
    // insert.run(1, 'hello');
    const query = database.prepare('SELECT * FROM ENCUESTA;');
    return query.all();
  }


  static createAlumno(nombre,email,clave,id_curso,id_grupo){
    const query = database.prepare('INSERT INTO ALUMNO (nombre, email, clave, id_curso, id_grupo) VALUES (?, ?, ?, ?, ?)');
    const resultado = query.run(nombre,email, clave, id_curso,id_grupo); 

    if(resultado.changes==1)
      return resultado.lastInsertRowid;
    else
      return null;
  }


  static getEncuestasByCursoYGrupo(curso, grupo){
    const query = database.prepare('SELECT * FROM ENCUESTA WHERE id_curso=? AND id_grupo=?');
    return query.all(curso, grupo); 
  }


}

export default AlumnoModel;