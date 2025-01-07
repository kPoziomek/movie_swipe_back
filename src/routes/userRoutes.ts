import { Router } from "express";
import { UserController } from "@controllers/userController";

const router = Router();
const userController = new UserController();

router.get("/me", userController.getMe);

export default router;
