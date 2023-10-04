import React from "react";
import styles from "./TeamList.module.css"; // Import your styles

const TeamList = ({ teams }) => {
	if (teams.length === 0) {
		return <p className={styles.noGames}>No Games</p>;
	}
  // delete 
  teams.forEach(team=>{
    delete team.games
  })
	const teamKeys = Object.keys(teams[0]); // Get the keys of the team object

	return (
		<div className={styles.teamTableContainer}>
			<h1>All Team Leaders</h1>
			<table className={styles.teamTable}>
				<thead>
					<tr>
						{teamKeys.map((key) => (
							<th key={key}>{key}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{teams.map((team, index) => (
						<tr key={index}>
							{teamKeys.map((key) => (
								<td key={key}>{team[key]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TeamList;
