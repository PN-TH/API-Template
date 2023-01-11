import dotenv from "dotenv";
dotenv.config();

export function getEnv(variable: string): string {
  const value = process.env[variable];
  if (typeof value === "undefined") {
    console.warn(`Seems like the variable "${variable}" is not set in the environment. 
    Did you forget to execute "cp .env.example .env" and adjust variables in the .env file to match your own environment ?`);
  }
  return value || "";
}

export const SERVER_PORT = getEnv(`SERVER_PORT`);
export const SERVER_HOST = getEnv(`SERVER_HOST`);
export const SERVER_DOMAIN = getEnv(`SERVER_DOMAIN`);

export const DB_HOST = getEnv(`DB_HOST`);
export const DB_PORT = getEnv(`DB_PORT`);
export const DB_NAME = getEnv(`DB_NAME`);
export const DB_USER = getEnv(`DB_USER`);
export const DB_PASS = getEnv(`DB_PASS`);
