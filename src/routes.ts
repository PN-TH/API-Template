import { Application, Request, Response } from 'express';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import materialsRouter from './routes/materials.routes';

export function setUpRoutes(app: Application) {
  app.use('/user', userRouter);
  app.use('/auth', authRouter);
  app.use('/materials', materialsRouter);

  // No route matching
  app.use('*', (req: Request, res: Response) =>
    res.status(404).send({ status: 404, message: 'Not found' })
  );
}
