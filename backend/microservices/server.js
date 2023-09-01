import { app } from "./app.js";
import { connectDB } from "./database/database.js";
import { config } from "dotenv";
import { logDiscord } from "./utils/logDiscord.js";
config();

app.listen(process.env.PORT, () => {
	connectDB();
	console.log("listening on port " + process.env.PORT);
});


process.on("uncaughtException", logDiscord);

process.on("unhandledRejection", logDiscord);
