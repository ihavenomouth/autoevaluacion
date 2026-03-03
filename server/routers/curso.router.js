import express from 'express';
import CursoController from '../controllers/curso.controller.js';
import verify from '../middleware/auth.js';

const cursoRouter = express.Router();

// Rutas: /api/curso
cursoRouter
.get('/', CursoController.getCursos)
.post('/', verify, CursoController.createCurso)

export default cursoRouter;
