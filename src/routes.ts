import { Application, Request, Response } from 'express';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';

export function setUpRoutes(app: Application) {
  app.use('/user', userRouter);
  app.use('/auth', authRouter);

  // No route matching
  app.use('*', (req: Request, res: Response) =>
    res.status(404).send({ status: 404, message: 'Not found' })
  );
}
