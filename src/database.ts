import { DataSource } from 'typeorm';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './utils/env';
import { join } from 'path';

const db_local = new DataSource({
  type: 'mysql',
  connectorPackage: 'mysql2',
  synchronize: false,
  name: 'db_local',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  timezone: 'Z'
});

export const initDb = async () => {
  try {
    await db_local.initialize();
  } catch (error) {
    console.error(error);
  }
};

export { db_local };
