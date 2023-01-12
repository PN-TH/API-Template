import { Router } from 'express';
import {
  createMaterials,
  getMaterials,
  getMaterialsByUser
} from '../controllers/material.controller';

const materialsRouter = Router();

materialsRouter.get('/', getMaterials);
materialsRouter.get('/user/:idUser', getMaterialsByUser);
materialsRouter.post('/', createMaterials);

export default materialsRouter;
