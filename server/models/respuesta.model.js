import database from "../database/conexion.js";

class RespuestaModel{
  
  static getRespuestasById_encuesta(id_encuesta){
    const query = database.prepare('SELECT * FROM RESPUESTA WHERE id_encuesta=?;');
    return query.all(id_encuesta);
  }

  
  static createRespuestas(respuestas){
    // 1. Iniciamos una transacción manual para asegurar atomicidad y rendimiento
    database.exec('BEGIN TRANSACTION');

    // console.log(respuestas)

    try {
      // 2. Preparamos la sentencia usando parámetros posicionales (?)
      const query = database.prepare('INSERT OR REPLACE INTO RESPUESTA (id_alumno, id_alumno_evaluado, id_pregunta, nota) VALUES (?, ?, ?, ?)');

      // 3. Iteramos sobre el array de objetos
      for (const r of respuestas) {
        query.run(
          r.id_alumno,
          r.id_alumno_evaluado,
          r.id_pregunta,
          r.nota
        );
      }

      // 4. Consolidamos los cambios
      database.exec('COMMIT');
      return true;

    } catch (error) {
      // Si algo falla, revertimos para no dejar datos parciales
      database.exec('ROLLBACK');
      return false;
    }
  }



}

export default RespuestaModel;