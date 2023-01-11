import { Router } from 'express';
import { getUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', getUser);

export default userRouter;
