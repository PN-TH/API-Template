import { User } from '../entities/User.entity';
import { IConnexion } from '../interfaces/connexion.interface';

export const getUserService = async ({ db_local }: IConnexion) => {
  try {
    const userRepository = db_local.getRepository(User);
    const allUsers = await userRepository.find();

    return allUsers;
  } catch (error) {
    console.error(error);
  }
};
