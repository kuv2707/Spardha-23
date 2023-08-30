const http = require("http");
const socketIo = require("socket.io");
const gameData=require("gameData")


export function sockedFn(expressApp) {
	const server = http.createServer(expressApp);
	const io = socketIo(server);

	io.on("connection", (socket) => {
		console.log("A user connected");

		socket.on("disconnect", () => {
			console.log("A user disconnected");
		});
	});

	server.listen(3000, () => {
		console.log("Socket.IO server listening on port 3000");
	});

	let tellClient= function()
	{
		io.sockets.broadcast("allData",gameData.getData());
	};
	return tellClient
}
