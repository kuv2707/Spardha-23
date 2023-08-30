import express from "express";
import { addGame } from "../controllers/games.js";
import { allGames } from "../controllers/games.js";
import { editGame } from "../controllers/games.js";

const router = express.Router();

router.post('/addGame', addGame);
router.get('/allGames', allGames);
router.patch('/editGame', editGame);

export default router;