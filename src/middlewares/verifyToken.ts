import { verify } from 'jsonwebtoken';
import { JWT_PRIVATE_KEY } from '../utils/env';
import { CustomError } from '../utils/errorHandler';

export const verifyToken = async (token: string) => {
  try {
    if (!token) {
      throw new CustomError(401, 'You must be logged');
    }

    if (token.startsWith('Bearer ')) {
      if (token.length <= 7) {
        throw new CustomError(401, 'You must be logged with a valid token');
      }

      token = token.substring(7);
    }

    const payload = await verify(token, JWT_PRIVATE_KEY);

    return payload;
  } catch (error) {
    throw new CustomError(401, 'Invalid token');
  }
};
