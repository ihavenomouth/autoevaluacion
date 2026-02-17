import express from 'express';
import CursoController from '../controllers/curso.controller.js';

const cursoRouter = express.Router();

// Rutas: /api/curso
cursoRouter
.get('/', CursoController.getCursos)

export default cursoRouter;
