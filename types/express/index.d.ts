import { DataSource, DataSourceOptions } from 'typeorm';
import { ITokenPayload } from '../interfaces/token.interface';

declare global {
  namespace Express {
    interface Request {
      connectionOptions: {
        db_local: DataSourceOptions;
      };
      tokenPayload: ITokenPayload;
      connections: { [key: string]: DataSource };
    }
  }
}
