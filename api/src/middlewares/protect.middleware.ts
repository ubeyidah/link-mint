import { NextFunction, Response } from "express";
import { auth } from "../lib/auth";
import { fromNodeHeaders } from "better-auth/node";
import { ExpressRequest } from "../types/express";

export const protectRoute = async (
  req: ExpressRequest,
  res: Response,
  next: NextFunction
) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  if (!session) {
    return res
      .status(401)
      .json({ message: "Unauthorized", data: null, success: false });
  }
  req.userId = session.user.id;
  next();
};
