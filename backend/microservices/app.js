import { connectDB } from "./database/database.js";
import express from "express";
import { config } from "dotenv";
import gameRouter from "./routes/gameRouter.js"
import {errorMiddleware} from "./middlewares/error.js";
import cors from "cors"
import sockedFn from "./socket.js";
import path from "path";

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

app.use(express.static(path.resolve("./public")));

//using routes
app.use("/games", gameRouter(tellClient) );

app.get('/', (req, res) => {
    const filePath = '/public/index.html';
    res.sendFile(filePath);
});

app.listen(process.env.PORT,() => console.log(`listening on http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`));

app.use(errorMiddleware);

