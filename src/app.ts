import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";
import userRoutes from "./routes/userRoutes";
import { mockUserMiddleware } from "./middleware/mockUser.middleware";

const app = express();

app.use(
  cors({
    origin: [
      'https://movie-swipe-front-k4kc52p8p.vercel.app',
      'http://localhost:5173'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());
app.use(mockUserMiddleware);
app.use(express.urlencoded({ extended: true }));


app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);

export default app;
