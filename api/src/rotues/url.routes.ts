import { Router } from "express";
import { createShortUrl } from "../controller/url.controller";
import { protectRoute } from "../middlewares/protect.middleware";

const router = Router();

router.post("/", protectRoute, createShortUrl);

export default router;
