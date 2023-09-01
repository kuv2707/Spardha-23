import express from "express";
import gameRouter from "./routes/gameRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import swaggerUi from "swagger-ui-express";
import YAML from 'yamljs';
import axios from "axios";
import { logDiscord } from "./utils/logDiscord.js";


const swaggerDocument = YAML.load('./config/gameRoutes.yaml');
export const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

//using routes
app.use("/api/v1/games", gameRouter);
app.get("/sendDiscord", (req, res) => {
    const data = {
        message: "Test"
    }
    logDiscord(data);
    res.json({
        success: true,
    })
})

//Using middlewares
app.use(errorMiddleware);

