// import { DatabaseSync } from 'node:sqlite';
// const database = new DatabaseSync(process.env.RUTA_BD);
import database from "./conexion.js";


// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE IF NOT EXISTS CURSO  (
    id INTEGER PRIMARY KEY, 
    nombre TEXT NOT NULL UNIQUE
  );
  
  CREATE TABLE IF NOT EXISTS  GRUPO (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL
  );
  
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
  
`);