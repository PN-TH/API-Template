import { db_local } from '../database';
import { Request, Response, NextFunction } from 'express';
import {
  createMaterialService,
  getMaterialsByUserService,
  getMaterialsService
} from '../services/material.services';
import { verifyToken } from '../middlewares/verifyToken';
import { ITokenPayload } from '../interfaces/token.interface';
import { CustomError } from '../utils/errorHandler';

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
    req.tokenPayload = (await verifyToken(req.headers.authorization as string)) as ITokenPayload;

    if (req.tokenPayload && req.tokenPayload.user === req.body.user) {
      await createMaterialService({ db_local }, req.body);
      return res.status(201).json('created');
    } else {
      throw new CustomError(401, 'Unauthorized');
    }
  } catch (error) {
    return next(error);
  }
};

export const getMaterialsByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idUser } = req.params;
    req.tokenPayload = (await verifyToken(req.headers.authorization as string)) as ITokenPayload;

    if (req.tokenPayload && req.tokenPayload.user === req.body.user) {
      const result = await getMaterialsByUserService({ db_local }, parseInt(idUser, 10));
      return res.status(200).json(result);
    } else {
      throw new CustomError(401, 'Unauthorized');
    }
  } catch (error) {
    return next(error);
  }
};
