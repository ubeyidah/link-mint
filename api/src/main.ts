import express from "express";
import { env } from "envgaurd";
const app = express();

const port = env("PORT", 8080);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
