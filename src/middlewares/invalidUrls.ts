import { Express, NextFunction, Request, Response } from "express";
const addInvalidUrlMiddleware = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res
      .status(404)
      .json({
        error: `${req.originalUrl} not found`,
      });
    next();
  });
};

export default addInvalidUrlMiddleware;
