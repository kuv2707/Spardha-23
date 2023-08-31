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
import catchAsync from "./utils/catchAsync.js";
import cron from "node-cron";
import axios from "axios";

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
app.get("/cron-job", catchAsync(async (req, res) => {
	res.status(200).json({
		success: true
	});
}));

//Schedule the cron job to run every 14 minutes to make sure server doesn't get down
cron.schedule('*/14 * * * *', () => {
	axios.get(`${process.env.BACKEND_URL}/cron-job`).then(res => {}).catch(err => console.log(err))
})


//using routes
app.use("/games", gameRouter(tellClient));
app.use(errorMiddleware);
