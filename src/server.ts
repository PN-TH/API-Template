import { app } from './app';
import { initDb } from './database';
import { SERVER_PORT } from './utils/env';

export const server = app.listen(SERVER_PORT, async () => {
  await initDb();

  console.log(`⚡️ Server is running at :${SERVER_PORT}`);
});
