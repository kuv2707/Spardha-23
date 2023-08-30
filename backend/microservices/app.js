import { connectDB } from "./database/database.js";
import express from "express";
import { config } from "dotenv";
import gameRouter from "./routes/gameRouter.js"
import {errorMiddleware} from "./middlewares/error.js";
import cors from "cors"
import sockedFn from "./socket.js";

//* Connecting to DB
// connectDB();

export const app = express();
// config();
const tellClient=sockedFn(app);

//Using middlewares
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    }));

//using routes
app.use("/games", gameRouter(tellClient) );

app.get('/', (req, res) => {
    res.sendFile(process.cwd()+"/index.html");
});

app.use(errorMiddleware);

