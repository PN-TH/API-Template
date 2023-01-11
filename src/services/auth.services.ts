import { User } from '../entities/User.entity';
import { IConnexion } from '../interfaces/connexion.interface';
import argon2 from 'argon2';
import { IUser } from '../interfaces/user.interface';

export const registerUserService = async ({ db_local }: IConnexion, newUser: IUser) => {
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
