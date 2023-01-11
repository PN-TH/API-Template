import { app } from "./app";
import { SERVER_PORT } from "./utils/env";

const server = app.listen(SERVER_PORT, async () => {
  console.log("🚀 Server is starting...");

  console.log(`⚡️ Server is running at :${SERVER_PORT}`);
});
