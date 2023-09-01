const URL = process.env.DISCORD_WEBHOOK_URL;
import axios from "axios";
export async function logDiscord(err) {
	try{
        await axios.post(URL, {
            content: `Error at timestamp ${Date.now()}\n Error Message: ${
                err.message
            }\nError stack:\n ${err.stack}`,
        });

    }
    catch(e){
        console.log("Error while logging to discord",e);
    }
}
