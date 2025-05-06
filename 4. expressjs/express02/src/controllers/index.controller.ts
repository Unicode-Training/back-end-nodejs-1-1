import { Response } from "express";

export const indexController = {
  index: (req: Request, res: Response) => {
    return res.json({ title: "Index" });
  },
};
