import { config } from "../config";
export const corsConfig = {
  origin: ["http://localhost:5173", config.frontendUrl],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400,
};
