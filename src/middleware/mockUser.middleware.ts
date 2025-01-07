// // src/middleware/mockUser.middleware.ts
import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
      };
    }
  }
}

import { DEMO_USER } from '../config/constants';

export const mockUserMiddleware = (req: Request, _res: Response, next:NextFunction) => {
  req.user = DEMO_USER;
  next();
};
