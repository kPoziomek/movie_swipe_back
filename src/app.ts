import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";
import userRoutes from "./routes/userRoutes";
import { mockUserMiddleware } from "./middleware/mockUser.middleware";

const app = express();

app.use(
  cors({
    origin: ["https://movie-swipe-front-co8ccl3f6.vercel.app", "http://localhost:5173"],
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

export default app;
