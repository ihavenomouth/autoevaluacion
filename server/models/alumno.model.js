import database from "../database/conexion.js";

class AlumnoModel{
  
  static getAlumnos(){
    // const query = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
    // insert.run(1, 'hello');
    const query = database.prepare('SELECT ALUMNO.id as id, ALUMNO.nombre, email, id_curso, CURSO.nombre as curso, id_grupo, GRUPO.nombre as grupo FROM ALUMNO LEFT JOIN CURSO on CURSO.id = id_curso LEFT JOIN GRUPO on id_grupo = GRUPO.id ORDER BY GRUPO.nombre, ALUMNO.nombre');
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


  static getAlumnoByEmail(email){
    // const query = database.prepare('SELECT id, nombre, email, id_curso, id_grupo, clave FROM ALUMNO WHERE email=?');
    const query = database.prepare('SELECT alumno.id as id, alumno.nombre as nombre, email, id_curso, id_grupo, clave, curso.nombre as curso, grupo.nombre as grupo FROM ALUMNO LEFT JOIN curso on curso.id=id_curso LEFT JOIN GRUPO on grupo.id=id_grupo WHERE email=?');
    return query.get(email); 
  }

  static getAlumnosByCursoYGrupo(id_curso, id_grupo){
    const query = database.prepare('SELECT alumno.id as id, alumno.nombre as nombre, id_curso, id_grupo FROM ALUMNO WHERE id_curso=? AND id_grupo=? ORDER BY alumno.nombre');
    return query.all(id_curso,id_grupo); 
  }


}

export default AlumnoModel;