import { Router } from "express";
import { createShortUrl, getCoin } from "../controller/url.controller";
import { protectRoute } from "../middlewares/protect.middleware";

const router = Router();

router.post("/", protectRoute, createShortUrl);
router.get("/coin", protectRoute, getCoin);

export default router;
