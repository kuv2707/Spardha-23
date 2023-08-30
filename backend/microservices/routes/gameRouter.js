import express from "express";

import gameController from "../controllers/gameController.js";

export default function (tellClient) {
	const router = express.Router();
    const fns=gameController(tellClient);
	router.post("/addGame", fns.addGame);
	router.get("/allGames", fns.allGames);
	router.patch("/editGame", fns.editGame);
	return router;
}
