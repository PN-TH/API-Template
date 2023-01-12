import { Router } from 'express';
import { createMaterials, getMaterials } from '../controllers/material.controller';

const materialsRouter = Router();

materialsRouter.get('/', getMaterials);
materialsRouter.post('/', createMaterials);

export default materialsRouter;
