import database from "../database/conexion.js";

class PreguntaModel{
  
  static getPreguntasById_encuesta(id_encuesta){
    const query = database.prepare('SELECT * FROM PREGUNTA WHERE id_encuesta=?;');
    return query.all(id_encuesta);
  }

  
  static createPregunta(id_encuesta, nombre, texto, peso){
    const query = database.prepare('INSERT INTO PREGUNTA (id_encuesta, nombre, texto, peso) VALUES (?, ?, ?, ?)');
    const resultado = query.run(id_encuesta, nombre, texto, peso); 

    if(resultado.changes==1)
      return resultado.lastInsertRowid;
    else
      return null;
  }



  static modifyPregunta(id, nombre, texto, peso, id_encuesta){
    
    const query = database.prepare('UPDATE PREGUNTA SET nombre=?, texto=?, peso=? WHERE id=?');

    const resultado = query.run(nombre, texto, peso, id);

    if(resultado.changes==1)
      return {id, nombre, texto, peso, id_encuesta};
    else
      return null;
  }


  static removePregunta(id){
    
    const query = database.prepare('DELETE FROM PREGUNTA WHERE id=?');

    const resultado = query.run(id);

    if(resultado.changes>=1)
      return id;
    else
      return null;
  }



}

export default PreguntaModel;
