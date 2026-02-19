import database from "../database/conexion.js";

class AlumnoModel{
  
  static getAlumnos(){
    // const query = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
    // insert.run(1, 'hello');
    const query = database.prepare('SELECT nombre, email,id_curso,id_grupo FROM ALUMNO;');
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
    const query = database.prepare('SELECT  nombre, email, clave, id_curso, id_grupo FROM ALUMNO WHERE email=?');
    return query.get(email); 
  }


}

export default AlumnoModel;