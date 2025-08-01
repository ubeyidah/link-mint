import { Request } from "express";
export interface ExpressRequest extends Request {
  userId?: string;
}
