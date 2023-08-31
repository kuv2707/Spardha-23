import http from "http";
import { Server } from "socket.io";
import Game from "./models/gameModel.js";

export default function (expressApp) {
	const server = http.createServer(expressApp);
	const io = new Server(server, { cors: { origin: "*" } });

	io.on("connection", async (socket) => {
		console.log("A user connected");
		const data = await Game.find({});
		socket.emit("allData", { data, message: "First Feed" });
		socket.on("disconnect", () => {
			console.log("A user disconnected");
		});
	});

	server.listen(process.env.PORT, () => {
		console.log("Socket.IO server listening on port" + process.env.PORT);
	});

	let tellClient = async (str) => {
		const data = await Game.find({});
		io.sockets.emit("allData", { data, message: str });
	};
	return tellClient;
}
