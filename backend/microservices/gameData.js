import fs from "fs";
import { v4 as uuidv4 } from "uuid";
const gameData = new Map();
JSON.parse(fs.readFileSync("gameData.json", "utf8")).forEach((data) =>
	map.set(data.id, data)
);

function getData() {
	const data = [];
	for (const [key, value] of gameData.entries()) {
		data.push(value);
	}
	return data;
}

function setData(data) {
	let newid = uuidv4();
	data.id = newid;
	gameData.set(newid, data);
	writeFile();
}

function deleteData(id) {
	gameData.delete(id);
	writeFile();
}

function patchData(id, changedData) {
	gameData.set(id, { ...gameData.get(id), ...changedData });
	writeFile();
}


function writeFile()
{
    fs.writeFileSync("gameData.json", JSON.stringify(getData()));
}

export default {getData,setData,deleteData,patchData}