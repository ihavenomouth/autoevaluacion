import express from 'express';
import AlumnoController from '../controllers/alumno.controller.js';
import verify from '../middleware/auth.js';

const alumnoRouter = express.Router();

// Rutas: /api/alumno
alumnoRouter
.get('/', AlumnoController.getAlumnos)
.get('/:email', AlumnoController.getAlumnoByEmail)
.post('/', AlumnoController.createAlumno)
.delete('/', AlumnoController.removeAlumno)
.put('/', AlumnoController.modifyAlumno)
.post('/login', AlumnoController.loginAlumno)
.post('/logout', AlumnoController.logoutAlumno)
.post('/checkLogin', verify, AlumnoController.checkLoginAlumno)

export default alumnoRouter;
