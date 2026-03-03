import express from 'express';
import EncuestaController from '../controllers/encuesta.controller.js';
import verify from '../middleware/auth.js';

const encuestaRouter = express.Router();

// Rutas: /api/encuesta
encuestaRouter
.get('/', EncuestaController.getEncuestas)
.post('/', EncuestaController.createEncuesta)
// .delete('/', EncuestaController.removeEncuesta)
.put('/', verify, EncuestaController.modifyEncuesta)

export default encuestaRouter;
