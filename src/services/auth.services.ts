import { User } from '../entities/User.entity';
import { IConnexion } from '../interfaces/connexion.interface';
import argon2 from 'argon2';
import { IUser } from '../interfaces/user.interface';
import jwt from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_EXPIRES_IN_REMEMBER, JWT_PRIVATE_KEY } from '../utils/env';

export const loginService = async (
  { db_local }: IConnexion,
  email: string,
  password: string,
  remember: boolean
) => {
  try {
    const userRepository = db_local.getRepository(User);

    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('Invalid login');
    }

    const match = await argon2.verify(user.password, password);
    if (!match) {
      throw new Error('Invalid login');
    }

    const idUser = user.id;
    const token = jwt.sign(
      {
        user: idUser
      },
      JWT_PRIVATE_KEY,
      { expiresIn: remember ? parseInt(JWT_EXPIRES_IN_REMEMBER) : parseInt(JWT_EXPIRES_IN) }
    );

    return token;
  } catch (error) {
    console.error(error);
  }
};

export const registerService = async ({ db_local }: IConnexion, newUser: IUser) => {
  try {
    const userRepository = db_local.getRepository(User);

    const isUserAlreadyExist = await userRepository.findOne({ where: { email: newUser.email } });
    if (isUserAlreadyExist) {
      throw new Error('Email already taken');
    }

    const hashedPassword = await argon2.hash(newUser.password);
    newUser.password = hashedPassword;
    newUser.createdAt = new Date();

    await userRepository.save(newUser);
    return newUser;
  } catch (error) {
    console.error(error);
  }
};
