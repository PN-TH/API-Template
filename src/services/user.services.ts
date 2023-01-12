import { User } from '../entities/User.entity';
import { IConnexion } from '../interfaces/connexion.interface';
import { handleServiceCatch } from '../utils/errorHandler';

export const getUserService = async ({ db_local }: IConnexion) => {
  try {
    const userRepository = db_local.getRepository(User);
    const allUsers = await userRepository.find();

    return allUsers;
  } catch (error) {
    throw handleServiceCatch(error);
  }
};
