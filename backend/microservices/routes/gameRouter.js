import express from "express";

import gameController from "../controllers/gameController.js";
const {addGame, allGames, editGame, deleteGame} = gameController;
const router = express.Router();

router.post("/addGame", addGame);
router.get("/allGames", allGames);
router.patch("/editGame/:game_id", editGame);
router.delete("/deleteGame/:game_id", deleteGame);

export default router;

