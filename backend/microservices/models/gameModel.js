import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
	game_name: {
		type: String,
		required: true,
	},
	game_start: {
		type: Date,
		required: true,
	},
	is_completed: {
		type: Boolean,
		default: false,
	},
	data: {
		type: JSON,
	},
});

const Game = mongoose.model("Game", gameSchema);
export default Game;
