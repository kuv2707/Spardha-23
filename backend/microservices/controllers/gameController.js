import AppError from "../middlewares/error.js";
import Game from "../models/gameModel.js";
import catchAsync from "../utils/catchAsync.js";
import { validatePATCHData, validatePOSTData } from "../utils/validators.js";


const addGame = catchAsync(async (req, res) => {
	const [verdict,validatedData]=validatePOSTData(req.body);
	if(!verdict)
	throw new AppError("Invalid data",400);
	const game = await Game.create(validatedData);
	
	res.status(201).json({
		success: true,
		message: "Game added successfully",
		game_id: game._id,
	});
});

const allGames = catchAsync(async (_, res) => {
	const data = await Game.find({});
	res.status(200).json({
		success: true,
		length: data.length,
		data,
	});
});

const editGame = catchAsync(async (req, res) => {
	const { game_id } = req.params;
	if(!game_id)
	throw new AppError("Provide a valid game_id",400);
	const game = await Game.findById(game_id);
	if (!game) throw new AppError("Game not found", 404);

	//TODO: validate editTo
	const [verdict, validatedData] = validatePATCHData(req.body);
	if (!verdict) throw new AppError("Invalid data", 400);
	for(let field in validatedData)
	{
		game[field]=validatedData[field];
	}

	let editedGame = await game.save();
	res.status(200).json({
		success: true,
		message: "Game edited successfully",
		editedGame,
	});
});

const deleteGame = catchAsync(async (req, res) => {
	const { game_id } = req.params;
	if(!game_id)
	throw new AppError("Provide a valid game_id",400);
	const deletedGame=await Game.findByIdAndDelete(game_id);
	if (!deletedGame)
	throw new AppError("Game not found:No deletion occured", 404);
	res.status(200).json({
		success: true,
		message: "Game deleted successfully",
		deletedGame,
	});
});

export default { addGame, allGames, editGame, deleteGame };
