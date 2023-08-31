import Game from "../models/gameModel.js";
export default function (tellClient) {
	const addGame = async (req, res, next) => {
		try {
			const {game_name, game_start, data} = req.body;
			const game = await Game.create({ game_name, game_start, data});
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
			const {game_id} = req.params;
			const editTo = req.body;
			const game = await Game.findById(game_id);
			if(editTo.game_name) {
				game.game_name = editTo.game_name;
			}
			if(editTo.game_start) {
				game.game_start = editTo.game_start;
			}
			if(editTo.is_completed !== undefined) {
				game.is_completed = editTo.is_completed;
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
			const {game_id} = req.params;
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
