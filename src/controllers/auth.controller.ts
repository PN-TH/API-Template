import { NextFunction, Request, Response } from 'express';
import { db_local } from '../database';
import { loginService, registerService } from '../services/auth.services';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, remember } = req.body;
  try {
    const result = await loginService({ db_local }, email, password, remember);

    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    db_local.synchronize();
    const result = await registerService({ db_local }, req.body);

    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
