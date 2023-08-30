import { connectDB } from "./database/database.js";
import express from "express";
import { config } from "dotenv";
import gameRouter from "./routes/games.js"
import {errorMiddleware} from "./middlewares/error.js";
import cors from "cors"

//* Connecting to DB
connectDB();

export const app = express();
// config();

//Using middlewares
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    }));

//using routes
app.use("/games", gameRouter );

app.get('/', (req, res) => {
    res.send('Welcome to Microservice');
});

app.use(errorMiddleware);


