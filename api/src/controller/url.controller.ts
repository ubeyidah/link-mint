import { Response } from "express";
import { urlSchema } from "../validation/url.validation";
import prisma from "../lib/db";
import { ExpressRequest } from "../types/express";
export const createShortUrl = async (req: ExpressRequest, res: Response) => {
  const { success, data, error } = urlSchema.safeParse(req.body);
  if (!success) {
    return res
      .status(400)
      .json({ message: error.issues[0].message, success: false, data: null });
  }
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, coins: true },
  });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
      data: null,
    });
  }
  if (user.coins <= 0) {
    return res.status(400).json({
      message: "You don't have enough coins to create a short URL",
      success: false,
      data: null,
    });
  }
  const shortUrl = await prisma.urls.create({
    data: {
      ...data,
      userId: req.userId as string,
    },
  });
  await prisma.user.update({
    where: { id: req.userId },
    data: { coins: user.coins - 1 },
  });
  return res.status(201).json({
    message: "Short URL created successfully",
    success: true,
    data: shortUrl,
  });
};
