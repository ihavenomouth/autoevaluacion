import express from 'express';
import AlumnoController from '../controllers/alumno.controller.js';

const alumnoRouter = express.Router();

// Rutas: /api/alumno
alumnoRouter
.get('/', AlumnoController.getAlumnos)
.get('/:email', AlumnoController.getAlumnoByEmail)
.post('/', AlumnoController.createAlumno)
.delete('/', AlumnoController.removeAlumno)
.put('/', AlumnoController.modifyAlumno)

export default alumnoRouter;
