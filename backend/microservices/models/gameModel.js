import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    game_name: {
        type: String,
        required: true
    }
})

export const User = mongoose.model("User", userSchema);