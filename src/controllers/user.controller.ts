import { db_local } from '../database';
import { getUserService } from '../services/user.services';
import { Request, Response, NextFunction } from 'express';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getUserService({ db_local });
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};
