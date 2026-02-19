import express from 'express';
import EncuestaController from '../controllers/encuesta.controller.js';

const encuestaRouter = express.Router();

// Rutas: /api/encuesta
encuestaRouter
.get('/', EncuestaController.getEncuestas)
.get('/:email', EncuestaController.getEncuestaByEmail)
.post('/', EncuestaController.createEncuesta)
.delete('/', EncuestaController.removeEncuesta)
.put('/', EncuestaController.modifyEncuesta)

export default encuestaRouter;
