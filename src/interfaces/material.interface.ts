import { User } from '../entities/User.entity';

export interface IMaterial {
  id: number;
  name: string;
  description?: string;
  picture?: string;
  availability: string;
  createdAt: Date;
  user: User;
}
