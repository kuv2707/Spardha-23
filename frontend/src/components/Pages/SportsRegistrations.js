import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Styles.css";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import TeamList from "./TeamList";

const baseUrl = process.env.REACT_APP_BASE_URL;
const AllGames = () => {
	const [sportTeams, setSportTeams] = useState();
	const [sportNames, setSportNames] = useState();
	const [selectedSport, setSelectedSport] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const { token } = useContext(AuthContext);
	useEffect(() => {
		axios
			.get(`${baseUrl}/teams/contingent/all`, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				let snames={}
				res.data.forEach(user=>{
					user.games.forEach(game=>{
						if(snames[game]===undefined)
							snames[game]=[]
						snames[game].push(user)
					})
				})
				let sportnames = Object.keys(snames);
				setSportNames(sportnames);
				setSelectedSport(sportnames[0]);
				setSportTeams(() => snames);
				setIsLoaded(true);
				
			})
			.catch((err) => console.error(err));
	}, [ token]);
	const handleSelectSport = setSelectedSport;

	return isLoaded ? (
		<div className="app" id="userdata">
			<Sidebar
				sports={sportNames}
				onSelectSport={handleSelectSport}
				selectedSport={selectedSport}
			/>
			<div className="content">
				{/* <div className="image-container">
          <img src={`/images/${selectedSport}.jpeg`} alt={selectedSport} />
        </div> */}
				<div className="heading">
					<h1>{selectedSport} Teams Registered</h1>
				</div>
				{
					sportTeams[selectedSport]!==undefined?
					<TeamList teams={sportTeams[selectedSport]} />:"Logical error"
				}
			</div>
		</div>
	) : (
		<Loading />
	);
};

function Loading() {
	return (
		<div className="loading">
			<div className="spinner"></div>
			<p>Loading...</p>
		</div>
	);
}

export default AllGames;
