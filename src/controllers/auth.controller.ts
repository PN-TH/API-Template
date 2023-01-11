import { NextFunction, Request, Response } from 'express';
import { db_local } from '../database';
import { registerUserService } from '../services/auth.services';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await registerUserService({ db_local }, req.body);

    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
