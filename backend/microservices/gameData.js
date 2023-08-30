import fs from "fs";
import { v4 as uuidv4 } from "uuid";
const gameData = new Map();
// let r=[]//JSON.parse(fs.readFileSync("gameData.json", "utf8"))
// console.log(r, typeof(r))
// r.forEach((data) =>
// 	map.set(data.id, data)
// );

function getData() {
	const data = [];
	for (const [key, value] of gameData.entries()) {
		data.push(value);
	}
	return (data);
}

function addData(data) {
	let newid = uuidv4();
	data.id = newid;
	gameData.set(newid, data);
	writeFile();
	return newid;
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
    console.log("dfsfa",gameData)
	// fs.writeFileSync("gameData.json", JSON.stringify(getData()));
}

export default {getData,addData,deleteData,patchData}