import { Request, Response } from "express";
import { urlSchema } from "../validation/url.validation";
export const createShortUrl = async (req: Request, res: Response) => {
  const { success, data, error } = urlSchema.safeParse(req.body);
};
