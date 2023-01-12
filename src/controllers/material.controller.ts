import { db_local } from '../database';
import { Request, Response, NextFunction } from 'express';
import {
  createMaterialService,
  getMaterialsByUserService,
  getMaterialsService
} from '../services/material.services';

export const getMaterials = async (req: Request, res: Response, next: NextFunction) => {
  db_local.synchronize();
  try {
    const result = await getMaterialsService({ db_local });
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export const createMaterials = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createMaterialService({ db_local }, req.body);
    return res.status(201).json('created');
  } catch (error) {
    return next(error);
  }
};

export const getMaterialsByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idUser } = req.params;
    const result = await getMaterialsByUserService({ db_local }, parseInt(idUser, 10));

    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
