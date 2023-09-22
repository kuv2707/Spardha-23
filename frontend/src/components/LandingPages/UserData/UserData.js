import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MatchList from './MatchList';
import './Styles.css';
const MICROSERVICE_URL = 'http://localhost:5000/api/v1/games';
const UserData = () => {
  const [sportsAndFixtures, setSportsAndFixtures] = useState();
  const [sportNames, setSportNames] = useState();
  const [selectedSport, setSelectedSport] = useState();
  const [isLoaded, setIsLoaded]=useState(false);
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
        let sportnames = Object.keys(sports_o);
        setSportNames(sportnames);
        setSelectedSport(sportnames[0]);
        setIsLoaded(true);
      })
      .catch(console.err);
  }, []);
  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
  };

  return (
    isLoaded?(<div className="app" id="userdata">
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
  ):<Loading/>);
};

function Loading(){
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export { UserData };
