import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";
import userRoutes from "./routes/userRoutes";
import { mockUserMiddleware } from "./middleware/mockUser.middleware";

const app = express();

app.use(
  cors({
    origin: "*",
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
