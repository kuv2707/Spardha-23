import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    game_name: {
        type: String,
        required: true
    },
    game_timestamp: {
        type: Date,
        required: true
    },
    data: {
        type: JSON
    }
})

const Game = mongoose.model("Game", gameSchema);
export default Game;