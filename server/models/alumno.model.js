import database from "../database/conexion.js";

class AlumnoModel{
  
  static getAlumnos(){
    // const query = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
    // insert.run(1, 'hello');
    const query = database.prepare('SELECT * FROM ALUMNO;');
    return query.all();
  }


  static createAlumno(nombre,email,clave,id_curso,id_grupo){
    const query = database.prepare('INSERT INTO ALUMNO (nombre, email, clave, id_curso, id_grupo) VALUES (?, ?, ?, ?, ?)');
    insert.run(nombre,email, clave, id_curso,id_grupo);
  }


}

export default AlumnoModel;