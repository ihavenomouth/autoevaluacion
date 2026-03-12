import express from 'express';
import EncuestaController from '../controllers/encuesta.controller.js';
import verify from '../middleware/auth.js';

const encuestaRouter = express.Router();

// Rutas: /api/encuesta
encuestaRouter
.get('/', EncuestaController.getEncuestas)
.get('/curso/:id_curso/grupo/:id_grupo', EncuestaController.getEncuestasByCursoYGrupo)
.post('/', verify, EncuestaController.createEncuesta)
// .delete('/', EncuestaController.removeEncuesta)
.put('/', verify, EncuestaController.modifyEncuesta)

export default encuestaRouter;
