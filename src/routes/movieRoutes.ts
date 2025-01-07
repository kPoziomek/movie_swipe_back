import { Router } from "express";

import { MovieController } from "@controllers/movieController";

const router = Router();
const movieController = new MovieController();

router.get("/favorites", movieController.getFavorites);
router.delete("/:id/favorites", movieController.removeFavorites);

router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovieById);
router.post("/:id/interact", movieController.interact);
export default router;
