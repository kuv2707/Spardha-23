import express from "express";

import gameController from "../controllers/gameController.js";

export default function (tellClient) {
	const router = express.Router();
	const fns = gameController(tellClient);

/**
 * @swagger
 * tags:
 *   name: Games
 *   description: APIs related to Games
 */

/**
 * @swagger
 * /games/addGame:
 *   post:
 *     summary: Add a new game
 *     description: Add a new game with game name, start date, and data.
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_name:
 *                 type: string
 *               game_start:
 *                 type: string
 *                 format: date-time
 *               data:
 *                 type: object
 *     responses:
 *       201:
 *         description: Game added successfully
 *         content:
 *           application/json:
 *             example: { "success": true, "message": "Game added successfully", "game_id": "64efbdb3a0aac01671c574dc" }
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Invalid request data" }
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Internal server error" }
 */
	router.post("/addGame", fns.addGame);


/**
 * @swagger
 * /games/allGames:
 *   get:
 *     summary: Get all games
 *     description: Retrieve a list of all games.
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example: { "data": [{ "game_name": "Game 1", "game_start": "2023-09-01T12:00:00Z", "is_completed": false, "data": {"...": "..."} }, {...}, ...] }
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Internal server error" }
 */
	router.get("/allGames", fns.allGames);

/**
 * @swagger
 * /games/editGame/{game_id}:
 *   patch:
 *     summary: Edit a game
 *     description: Edit a game's details.
 *     tags: [Games]
 *     parameters:
 *       - name: game_id
 *         in: path
 *         required: true
 *         description: ID of the game to be edited
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_name:
 *                 type: string
 *               game_start:
 *                 type: string
 *                 format: date-time
 *               is_completed:
 *                 type: boolean
 *               data:
 *                 type: object
 *     responses:
 *       200:
 *         description: Game edited successfully
 *         content:
 *           application/json:
 *             example: { "success": true, "message": "Game edited successfully" }
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Invalid request data" }
 *       404:
 *         description: Game not found
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Game not found" }
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Internal server error" }
 */
	router.patch("/editGame/:game_id", fns.editGame);

/**
 * @swagger
 * /games/deleteGame/{game_id}:
 *   delete:
 *     summary: Delete a game
 *     description: Delete a game by its ID.
 *     tags: [Games]
 *     parameters:
 *       - name: game_id
 *         in: path
 *         required: true
 *         description: ID of the game to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Game deleted successfully
 *         content:
 *           application/json:
 *             example: { "success": true, "message": "Game deleted successfully" }
 *       404:
 *         description: Game not found
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Game not found" }
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example: { "success": false, "message": "Internal server error" }
 */
	router.delete("/deleteGame/:game_id", fns.deleteGame);
	return router;
}
