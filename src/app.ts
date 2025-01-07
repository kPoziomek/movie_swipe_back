import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";
import userRoutes from "./routes/userRoutes";
import { mockUserMiddleware } from "./middleware/mockUser.middleware";

const app = express();

const startServer = async () => {
  try {


    app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );
    app.use(express.json());
    app.use(mockUserMiddleware);
    app.use(express.urlencoded({ extended: true }));

    // Debug middleware
    app.use((req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next();
    });

    app.use("/api/movies", movieRoutes);
    app.use("/api/users", userRoutes);

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
