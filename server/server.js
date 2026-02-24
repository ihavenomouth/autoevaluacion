import express, { json } from 'express'
const app = express()
const port = 3000


app.use( express.json() );
app.use( express.urlencoded({extended:true}) );

// Servimos los ficheros estáticos
import path from 'path';
app.use(express.static(path.join(import.meta.dirname, 'public')));


// Cookieparser
import cookieParser from 'cookie-parser';
app.use(cookieParser());



// Rutas de mi API
import cursoRouter from './routers/curso.router.js';
app.use("/api/curso", cursoRouter);

import grupoRouter from './routers/grupo.router.js';
app.use("/api/grupo", grupoRouter);

import alumnoRouter from './routers/alumno.router.js';
app.use("/api/alumno", alumnoRouter);



// Ruta genérica
app.use((req, res, next) => {
  // res.status(404).send("Recurso no encontrado");
  res.redirect("/");
})

// Error handler genérico
app.use((err, req, res, next) => {
  res.status(500).send('Error indeterminado. No se pudo procesar la petición')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
