import http from "http";
import {Server} from "socket.io";
import gameData from "./gameData.js";

export default function (expressApp) {
	const server = http.createServer(expressApp);
	const io = new Server(server);

	io.on("connection", (socket) => {
		console.log("A user connected");

		socket.on("disconnect", () => {
			console.log("A user disconnected");
		});
	});

	server.listen(3000, () => {
		console.log("Socket.IO server listening on port 3000");
	});

	let tellClient = function () {
		io.sockets.broadcast("allData", gameData.getData());
	};
	return tellClient;
}
