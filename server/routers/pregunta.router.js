import express from 'express';
import PreguntaController from '../controllers/pregunta.controller.js';
import verify from '../middleware/auth.js';

const preguntaRouter = express.Router();

// Rutas: /api/encuesta
preguntaRouter
.get('/encuesta/:id_encuesta', PreguntaController.getPreguntasById_encuesta)
.post('/', verify, PreguntaController.createPregunta)
.delete('/:id', verify, PreguntaController.removePregunta)
.put('/', verify, PreguntaController.modifyPregunta)

export default preguntaRouter;
