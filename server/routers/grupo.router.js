import express from 'express';
import GrupoController from '../controllers/grupo.controller.js';

const grupoRouter = express.Router();

// Rutas: /api/grupo
grupoRouter
.get('/', GrupoController.getGrupos)

export default grupoRouter;
