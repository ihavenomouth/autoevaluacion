import { DatabaseSync } from 'node:sqlite';
const database = new DatabaseSync(process.env.RUTA_BD);

export default database;