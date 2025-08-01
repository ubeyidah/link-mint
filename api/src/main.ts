import express from "express";
import { env } from "envgaurd";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import urlRoutes from "./rotues/url.routes";

const app = express();

app.use(
  cors({
    origin: [env("FRONTED_URL") as string],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// routes
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.use("/api/urls", urlRoutes);

const port = env("PORT", 4000);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
