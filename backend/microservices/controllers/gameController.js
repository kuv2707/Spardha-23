import Game from "../models/gameModel.js";
export default function (tellClient) {
	const addGame = async (req, res, next) => {
		try {
			const {game_name, game_timestamp, data} = req.body;
			const game = await Game.create({ game_name, game_timestamp, data});
			tellClient("Added");
			res.status(201).json({
				success: true,
				message: "Game added successfully",
				game_id: game._id,
			});
		} catch (error) {
			next(error);
		}
	};

	const allGames = async (req, res, next) => {
		try {
			const data = await Game.find({});
			res.status(200).json({
				data
			});
		} catch (error) {
			next(error);
		}
	};

	const editGame = async (req, res, next) => {
		try {
			const { game_id, editTo } = req.body;
			const game = await Game.findById(game_id);
			if(editTo.game_name) {
				game.game_name = editTo.game_name;
			}
			if(editTo.game_timestamp) {
				game.game_timestamp = editTo.game_timestamp;
			}
			for(let field in game.data)
			{
				if(!editTo.data[field]) {
					editTo.data[field]=game.data[field];
				}
			}
			game.data = editTo.data;
			await game.save()
			tellClient("Edited");
			res.status(200).json({
				success: true,
				message: "Game edited successfully",
				updatedGame: game
			});
		} catch (error) {
			next(error);
		}
	};

	const deleteGame = async (req, res, next) => {
		try {
			const { game_id } = req.body;
			await Game.findByIdAndDelete(game_id);
			tellClient("Deleted");
			res.status(200).json({
				success: true,
				message: "Game deleted successfully",
			});
		} catch (error) {
			next(error);
		}
	};

	return { addGame, allGames, editGame, deleteGame };
}
