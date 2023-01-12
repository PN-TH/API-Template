/* eslint-disable no-console */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';

export class CustomError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}

export const handleServiceCatch = (error: unknown) => {
  if (error instanceof CustomError) {
    throw new CustomError(error?.status, error?.message);
  }

  if (error instanceof JsonWebTokenError) {
    throw new CustomError(401, error.message);
  }

  throw new CustomError(500, 'Internal Server Error');
};

const errorHandler: ErrorRequestHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction | null
) => {
  if (next) {
    const message = error.message || 'Something went wrong, please try again later';
    const status = error.status || 500;

    return res.status(status).send({ message });
  }
};

export default errorHandler;
