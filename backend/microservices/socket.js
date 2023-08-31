import http from "http";
import {Server} from "socket.io";
import Game from "./models/gameModel.js";

export default function (expressApp) {
	const server = http.createServer(expressApp);
	const io = new Server(server);

	io.on("connection", (socket) => {
		console.log("A user connected");

		socket.on("disconnect", () => {
			console.log("A user disconnected");
		});
	});

	server.listen(process.env.PORT, () => {
		console.log("Socket.IO server listening on port" + process.env.PORT);
	});

	let tellClient = async (str) => {
		const data = await Game.find({})
		io.sockets.emit("allData", { data , message:str});
	};
	return tellClient;
}
