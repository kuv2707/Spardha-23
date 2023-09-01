import axios from "axios";
import { config } from "dotenv";
config();

const URL = process.env.DISCORD_WEBHOOK_URL;
export async function logDiscord(err) {
	try{
        await axios.post(URL, {
            content: `Error in Microservices to update Fixtures\nError at timestamp ${Date.now()}\nError Message: ${
                err.message
            }\nError stack:\n ${err.stack}`,
        });

    }
    catch(e){
        console.log("Error while logging to discord",e);
    }
}
