import { Request, Response } from "express";

export const checkHealthStatus = (_req: Request, res: Response) => {
  res.status(200).json({ message: "pong 🏓" });
};
