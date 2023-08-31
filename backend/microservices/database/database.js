import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME, useNewUrlParser: true, useUnifiedTopology: true})
    .then((c) => {
        console.log(`Database connected with ${c.connection.host}`);
    })
    .catch(err => console.log(err));
}