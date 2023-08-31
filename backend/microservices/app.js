import { connectDB } from "./database/database.js";
import express from "express";
import { config } from "dotenv";
import gameRouter from "./routes/gameRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import sockedFn from "./socket.js";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerDef from "./utils/swaggerDef.js";

//* Connecting to DB
connectDB();

if(process.env.NODE_ENV === 'production'){
	// console.log=()=>{}
}

export const app = express();
config();
const tellClient = sockedFn(app);

//Using middlewares
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
		credentials: true,
	})
);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDef));
app.use(express.json());

app.use(express.static(path.resolve("./public")));


//using routes
app.use("/games", gameRouter(tellClient));
app.use(errorMiddleware);
