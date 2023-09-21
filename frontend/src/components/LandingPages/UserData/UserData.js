import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MatchList from './MatchList';
import sportsData from './SportsData';
import './Styles.css';
for (let game of Object.keys(sportsData)) {
  sportsData[game].forEach((k) => (k._id = Math.random()));
}
const MICROSERVICE_URL = 'http://localhost:5000/api/v1/games';
const UserData = () => {
  const [sportsAndFixtures, setSportsAndFixtures] = useState(sportsData);
  const [sportNames, setSportNames] = useState(Object.keys(sportsData));
  const [selectedSport, setSelectedSport] = useState(sportNames[0]);

  useEffect(function () {
    fetch(MICROSERVICE_URL)
      .then((r) => r.json())
      .then((resp) => {
        let games = resp.data;
        let sports_o = {};
        for (let game of games) {
          if (!sports_o[game.game_name]) sports_o[game.game_name] = [];
          sports_o[game.game_name].push(game);
        }

        setSportsAndFixtures(()=>sports_o);
        let newsn = Object.keys(sports_o);
        setSportNames(newsn);
        setSelectedSport(newsn[0]);
      })
      .catch(console.err);
  }, []);
  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
  };

  return (
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
          <h1>{selectedSport} Player Registered</h1>
        </div>
        <MatchList matches={sportsAndFixtures[selectedSport]} />
      </div>
    </div>
  );
};

export { UserData };
