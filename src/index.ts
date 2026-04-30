import { app } from "./app.js";
import { config } from "./config/index.js";

// For local development
// if (process.env.NODE_ENV === "development") {
const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(
        `Server running on port ${config.port} in ${config.nodeEnv} mode`,
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

start();
// }

// Export for Vercel serverless
// export default app;
