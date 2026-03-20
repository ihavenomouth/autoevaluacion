import express from 'express';
import RespuestaController from '../controllers/respuesta.controller.js';
import verify from '../middleware/auth.js';

const respuestaRouter = express.Router();

// Rutas: /api/encuesta
respuestaRouter
.get('/:id_encuesta',verify,  RespuestaController.getRespuestasById_encuesta)
.post('/', RespuestaController.createRespuestas)
// .delete('/', RespuestaController.removeEncuesta)
// .put('/', verify, RespuestaController.modifyEncuesta)

export default respuestaRouter;
