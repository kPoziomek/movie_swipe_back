import { Request, Response } from "express";
import { UserService } from "@services/userService";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getMe = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.getUser(req.user!.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user data" });
    }
  };
}
