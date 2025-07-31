import express from "express";
import { env } from "envgaurd";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: [env("BETTER_AUTH_URL") as string],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// routes
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

const port = env("PORT", 8080);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
