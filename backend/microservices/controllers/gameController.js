import DB from "../gameData.js";
const { getData, addData, deleteData, patchData } = DB;
export default function (tellClient) {
	const addGame = (req, res, next) => {
		try {
			const data = req.body;
			let id = addData(data);
			tellClient("Added");
			res.status(201).json({
				success: true,
				message: "Game added successfully",
				id,
			});
		} catch (error) {
			next(error);
		}
	};

	const allGames = (req, res, next) => {
		try {
			const data = getData();
			res.status(200).json({
				data,
			});
		} catch (error) {
			next(error);
		}
	};

	const editGame = (req, res, next) => {
		try {
			const { id, data } = req.body;
			patchData(id, data);
			tellClient("Edited");
			res.status(200).json({
				success: true,
				message: "Game edited successfully",
			});
		} catch (error) {
			next(error);
		}
	};

	const deleteGame = (req, res, next) => {
		try {
			const { id, data } = req.body;
			deleteData(id);
			tellClient("Edited");
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
