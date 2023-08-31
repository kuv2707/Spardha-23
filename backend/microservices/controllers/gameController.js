import Game from "../models/gameModel.js";
import catchAsync from "../utils/catchAsync.js";

export default function (tellClient) {
	const addGame = catchAsync(async (req, res) => {
		const { game_name, game_start, data } = req.body;
		const game = await Game.create({ game_name, game_start, data });
		tellClient("Added");
		res.status(201).json({
			success: true,
			message: "Game added successfully",
			game_id: game._id,
		});
	});

	const allGames = catchAsync(async (req, res) => {
		const data = await Game.find({});
		res.status(200).json({
			success: true,
			length: data.length,
			data,
		});
	});

	const editGame = catchAsync(async (req, res) => {
		const { game_id } = req.params;
		const editTo = req.body;
		const game = await Game.findById(game_id);
		for (let field in editTo) {
			if (field === "data") {
				for (let field in game.data) {
					if (!editTo.data[field]) {
						editTo.data[field] = game.data[field];
					}
				}
				game.data = editTo.data;
			} else game[field] = editTo[field];
		}

		let editedGame = await game.save();
		tellClient("Edited");
		res.status(200).json({
			success: true,
			message: "Game edited successfully",
			editedGame,
		});
	});

	const deleteGame = catchAsync(async (req, res) => {
		const { game_id } = req.params;
		await Game.findByIdAndDelete(game_id);
		tellClient("Deleted");
		res.status(200).json({
			success: true,
			message: "Game deleted successfully",
		});
	});

	return { addGame, allGames, editGame, deleteGame };
}
