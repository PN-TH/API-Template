import { Router } from 'express';
import { registerUser } from '../controllers/auth.controller';

const authRouter = Router();

authRouter.post('/register', registerUser);

export default authRouter;
