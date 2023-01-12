import { Material } from '../entities/Material.entity';
import { IConnexion } from '../interfaces/connexion.interface';

export const getMaterialsService = async ({ db_local }: IConnexion) => {
  try {
    const materialRepository = db_local.getRepository(Material);
    const allMaterials = await materialRepository.find();

    return allMaterials;
  } catch (error) {
    console.error(error);
  }
};

export const createMaterialService = async ({ db_local }: IConnexion, data: Material) => {
  try {
    const result = await db_local
      .getRepository(Material)
      .insert({ ...data, createdAt: new Date() });

    return result;
  } catch (error) {
    console.error(error);
  }
};
