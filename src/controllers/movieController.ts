import { Request, Response } from "express";

import { MovieService } from "@services/movieService";
import { getPaginationParams } from "@utils/pagination";

export class MovieController {
  private movieService: MovieService;

  constructor() {
    this.movieService = new MovieService();
  }

  getMovies = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    try {
      const movies = await this.movieService.getMovies(page, limit);
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movies" });
    }
  };

  getMovieById = async (req: Request, res: Response) => {
    const movieId = req.params.id;
    try {
      const movie = await this.movieService.getMovieById(movieId);
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movie" });
    }
  };

  interact = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id: movieId } = req.params;
      const { type } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ error: "User not authenticated" });
        return;
      }

      const interaction = await this.movieService.interactWithMovie(
        userId,
        movieId,
        type as "LIKE" | "REJECT"
      );

      res.json(interaction);
    } catch (error:any) {
      if (error.message === 'DUPLICATE_INTERACTION') {
        res.status(409).json({
          error: 'DUPLICATE_INTERACTION',
          message: 'This movie is already in your favorites'
        });
      } else {
        res.status(500).json({ error: 'Failed to save interaction' });
      }
    }
  };

  getFavorites = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;


      if (!userId) {
        res.status(401).json({ error: "User not authenticated" });
        return;
      }

      const favorites = await this.movieService.getFavorites(
        userId,
        page,
        limit
      );

      res.json(favorites);
    } catch (error) {
      console.error("Error in getFavorites controller:", error);
      res.status(500).json({ error: "Failed to fetch favorites" });
    }
  };

  removeFavorites = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id: movieId } = req.params;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ error: "User not authenticated" });
        return;
      }

      await this.movieService.removeFavorite(userId, movieId);
      res.json({ message: "Favorite removed successfully" });
    } catch (error) {
      console.error("Error removing favorite:", error);
      res.status(500).json({ error: "Failed to remove favorite" });
    }
  };
}
