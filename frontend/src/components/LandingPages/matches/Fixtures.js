import React from 'react';
import './ResultFixture.css';
import cricket_img from '../Events/image/crickethover.png';
import badminton_img from '../Events/image/badmintonhover.png';
//TODO: import all
const Fixtures = ({ selectedSport,games,date }) => {
  let match=(selectedSport==="All"?games:games.filter(game=>game.game_name===selectedSport)).filter(game=>game.game_start===date)
  return (
    <div className="Supreme">
      {
        match.length===0&&<h2>No {selectedSport} matches on {new Date(date).toDateString()}</h2>
      }
      {match.map((data, index) => (
        <div className="displayBox" key={index}>
          <div className="row1">
            <div style={{ display: 'flex' }}>
              <img
                src={badminton_img}
                style={{ height: '25px' }}
                alt="sport icon"
              />
              {data.game_name}
            </div>
            {new Date(data.game_start).toLocaleTimeString()}
          </div>
          <div className="row2">
            {data.game_venue} 
            {/* | Round {data.round} */}
          </div>

          <div className="row3" style={{ color: 'black' }}>
            <div className="row4">
              <div className="rectangle"></div>
              {data.team1}
            </div>
            <span className="x">X</span>
            <div className="row4">
              <div className="rectangle"></div>
              {data.team2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fixtures;
