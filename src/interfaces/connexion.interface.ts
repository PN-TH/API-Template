import { DataSource, DataSourceOptions, EntityManager } from 'typeorm';

export interface IConnexion {
  [key: string]: DataSource | EntityManager;
}

export interface IConnexionOptions {
  db_local?: DataSourceOptions;
}
