import React from 'react';
import './ResultFixture.css';
import cricket_img from '../Events/image/crickethover.png';
import badminton_img from '../Events/image/badmintonhover.png';
import football_img from '../Events/image/footballhover.png';
import tennis_img from '../Events/image/tennishover.png';
import volleyball_img from '../Events/image/volleyballhover.png';
import basketball_img from '../Events/image/basketballhover.png';
import tabletennis_img from '../Events/image/tabletennishover.png';
import chess_img from '../Events/image/chesshover.png';
//handball,hockey,squash
import handball_img from '../Events/image/handballhover.png';
import hockey_img from '../Events/image/hockeyhover.png';
import squash_img from '../Events/image/squashhover.png';
//powerlifting, kabaddi, weightlifting, taekwondo
import powerlifting_img from '../Events/image/powerliftinghover.png';
import kabaddi_img from '../Events/image/kabaddihover.png';
import weightlifting_img from '../Events/image/weightliftinghover.png';
import taekwondo_img from '../Events/image/taekwondohover.png';
//aquatics,athletics,boxing,cycling,khokho,tabletennis
import aquatics_img from '../Events/image/aquaticshover.png';
import athletics_img from '../Events/image/athleticshover.png';
import boxing_img from '../Events/image/boxinghover.png';
import cycling_img from '../Events/image/cyclinghover.png';
import khokho_img from '../Events/image/kho-khohover.png';

const gameLogoMap = {
  Cricket: cricket_img,
  Badminton: badminton_img,
  Football: football_img,
  Tennis: tennis_img,
  Volleyball: volleyball_img,
  Basketball: basketball_img,
  "Table Tennis": tabletennis_img,
  Chess: chess_img,
  Handball: handball_img,
  Hockey: hockey_img,
  Squash: squash_img,
  Powerlifting: powerlifting_img,
  Kabaddi: kabaddi_img,
  "Weight Lifting": weightlifting_img,
  Taekwondo: taekwondo_img,
  Aquatics: aquatics_img,
  Athletics: athletics_img,
  Boxing: boxing_img,
  Cycling: cycling_img,
  "Kho-kho": khokho_img,
}



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
                src={gameLogoMap[data.game_name]??cricket_img}
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
