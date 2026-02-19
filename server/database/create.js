// import { DatabaseSync } from 'node:sqlite';
// const database = new DatabaseSync(process.env.RUTA_BD);
import database from "./conexion.js";


// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE IF NOT EXISTS CURSO  (
    id INTEGER PRIMARY KEY, 
    nombre TEXT NOT NULL UNIQUE
  );

  INSERT INTO CURSO(nombre) VALUES('2025-2026');
  INSERT INTO CURSO(nombre) VALUES('2026-2027');
  INSERT INTO CURSO(nombre) VALUES('2027-2028');
  INSERT INTO CURSO(nombre) VALUES('2028-2029');
  INSERT INTO CURSO(nombre) VALUES('2029-2030');
  
  CREATE TABLE IF NOT EXISTS  GRUPO (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL
  );
  
  INSERT INTO GRUPO(nombre) VALUES('1º DAW');
  INSERT INTO GRUPO(nombre) VALUES('1º DAW B');
  INSERT INTO GRUPO(nombre) VALUES('2º DAW');
  INSERT INTO GRUPO(nombre) VALUES('1º SMR');
  INSERT INTO GRUPO(nombre) VALUES('2º SMR');

  CREATE TABLE IF NOT EXISTS ALUMNO (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    clave TEXT NOT NULL,
    id_curso INTEGER,
    id_grupo INTEGER,
    FOREIGN KEY(id_curso) REFERENCES CURSO(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_grupo) REFERENCES GRUPO(id)
    ON DELETE CASCADE ON UPDATE CASCADE       
  );

  
  CREATE TABLE ENCUESTA (      
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    id_curso INTEGER,
    id_grupo INTEGER,
    FOREIGN KEY(id_curso) REFERENCES CURSO(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_grupo) REFERENCES GRUPO(id)
    ON DELETE CASCADE ON UPDATE CASCADE 
  );
  
  
  CREATE TABLE PREGUNTA (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_encuesta INTEGER,
    nombre TEXT,
    texto TEXT,
    peso INTEGER,
    FOREIGN KEY(id_encuesta) REFERENCES ENCUESTA(id)
    ON DELETE CASCADE ON UPDATE CASCADE
  );
  
  CREATE TABLE RESPUESTA (
    id_alumno INTEGER,
    id_alumno_evaluado INTEGER,
    id_pregunta INTEGER,
    nota REAL,
    PRIMARY KEY (id_alumno , id_alumno_evaluado, id_pregunta),
    FOREIGN KEY(id_alumno) REFERENCES ALUMNO(id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_alumno_evaluado) REFERENCES ALUMNO(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(id_pregunta) REFERENCES PREGUNTA(id)
    ON DELETE CASCADE ON UPDATE CASCADE
  );
  
`);