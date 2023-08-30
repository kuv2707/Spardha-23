import { connectDB } from "./database/database.js";
import express from "express";
import { config } from "dotenv";
import gameRouter from "./routes/gameRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import sockedFn from "./socket.js";
import path from "path";

//* Connecting to DB
connectDB();

export const app = express();
config();
const tellClient = sockedFn(app);

//Using middlewares
app.use(express.json());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
		credentials: true,
	})
);

app.use(express.static(path.resolve("./public")));
app.get("/getPort", (req,res,next) => {
	try {
		res.status(200).json({
			portNo: process.env.PORT
		})
	} catch (error) {
		next(error);
	}
});


//using routes
app.use("/games", gameRouter(tellClient));
app.use(errorMiddleware);
