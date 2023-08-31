import React from 'react';
import styles from './Events.module.css';
import rules from './rules.jpg';
// import trophy from './trophy.jpg';
import contacts from './contacts.jpg';
import { FaTimes } from 'react-icons/fa';
import AthleticsPDF from './athletics.pdf';
import BadmintonPDF from './badminton.pdf';
import BasketballPDF from './basketball.pdf';
import BoxingPDF from './boxing.pdf';
import CricketPDF from './cricket.pdf';
import ChessPDF from './chess.pdf';
import CyclingPDF from './CyclingPDF.pdf';
import FootballPDF from './football.pdf';
import HandballPDF from './handball.pdf';
import HockeyPDF from './hockey.pdf';
import KabbadiPDF from './kabbadi.pdf';
import KhoKhoPDF from './khokho.pdf';
import PowerliftingPDF from './powerlifting.pdf';
import SquashPDF from './squash.pdf';
import TableTennisPDF from './tabletennis.pdf';
import TennisPDF from './tennis.pdf';
import VolleyballPDF from './volleyball.pdf';
import WeightliftingPDF from './weightlifting.pdf';
import TaekwondoPDF from './taekwondo.pdf';

// const Aqautics = (props) => {
//   return (
//     <div>
//       <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
//         <div
//           className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
//         >
//           <button
//             className={`${styles.fa} ${styles.fa_times}`}
//             id="0x"
//             onClick={() => props.changeState(false)}
//           >
//             <FaTimes />
//           </button>
//           <div
//             className="row"
//             style={{ marginLeft: '15px', marginRight: '15px' }}
//           >
//             <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
//               <div className={`${styles.event_block}`}>
//                 <div className={`${styles.rule_box}`}>
//                   <div className={`${styles.a_rule}`}>
//                     <div className={`${styles.image}`}>
//                       <img
//                         className={`${styles.img_responsive}`}
//                         src={rules}
//                         alt="img"
//                       />
//                     </div>
//                     <div className={`${styles.info} ${styles.rule}`}>
//                       <h4> Rules </h4>
//                       {/* <a
//                      href={AthleticsPDF}//add aquatics rules pdf
//                         target="_blank"
//                         rel="noreferrer"
//                         className={`${styles.rulebook}`}
//                       >
//                         CLICK HERE FOR RULES
//                       </a>*/}
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
//               <div className={`${styles.event_block}`}>
//                 <div className={`${styles.winner_box} ${styles.info}`}>
//                   <div className={`${styles.image}`}>
//                     <img
//                       className={`${styles.img_responsive}`}
//                       src={trophy}
//                       alt="img"
//                     />
//                   </div>
//                   <div className={`${styles.info}`}>
//                     <h4>Aqautics</h4>
//                     <p>
//                       Coming Soon
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                       <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
//               <div className={`${styles.event_block}`}>
//                 <div className={`${styles.contact_box}`}>
//                   <div className={`${styles.image}`}>
//                     <img
//                       className={`${styles.img_responsive}`}
//                       src={contacts}
//                       alt="img"
//                     />
//                   </div>
//                   <div className={`${styles.info}`}>
//                     <h4>Contacts</h4>
//                     <p
//                       className={`${styles.paragraph}`}
//                       style={{ paddingBottom: '10px' }}
//                     >
//                       <b>CAPTAIN</b>
//                       <br />
//                       Rohit Diwakar
//                       <br />
//                       8827687934
//                       <br />
//                       rohit.diwakar.ece19@itbhu.ac.in
//                       <br />
//                       <br />
//                       Anshika Singh <b>(W)</b>
//                       <br />
//                       7985967630
//                       <br />
//                       anshika.singh.phy19@itbhu.ac.in
//                       <br />
//                       <br />
//                       <b>VICE-CAPTAIN</b>
//                       <br />
//                       Gurjot
//                       <br />
//                       7528980380
//                       <br />
//                       gurjot.student.ece19@itbhu.ac.in
//                       <br />
//                       <br />
//                       Shivanjali Verma <b>(W)</b>
//                       <br />
//                       8869038250
//                       <br />
//                       shivanjali.verma.mec19@itbhu.ac.in
//                       <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Athletics = (props) => {
  return (
    <div>
      <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
        <div
          className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
        >
          <button
            className={`${styles.fa} ${styles.fa_times}`}
            id="0x"
            onClick={() => props.changeState(false)}
          >
            <FaTimes />
          </button>
          <div
            className="row"
            style={{ marginLeft: '15px', marginRight: '15px' }}
          >
            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.rule_box}`}>
                  <div className={`${styles.a_rule}`}>
                    <div className={`${styles.image}`}>
                      <img
                        className={`${styles.img_responsive}`}
                        src={rules}
                        alt="img"
                      />
                    </div>
                    <div className={`${styles.info} ${styles.rule}`}>
                      <h4> Rules </h4>
                      <a
                        href={AthleticsPDF}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.rulebook}`}
                      >
                        CLICK HERE FOR RULES
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.winner_box} ${styles.info}`}>
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={trophy}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info}`}>
                    <h4>Athletics</h4>
                    <p>
                      Coming Soon
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.contact_box}`}>
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={contacts}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info}`}>
                    <h4>Contacts</h4>
                    <p
                      className={`${styles.paragraph}`}
                      style={{ paddingBottom: '10px' }}
                    >
                      <b>CAPTAIN</b>
                      <br />
                   	  Tagaram Kiran Kumar
                      <br />
                      8827687934
                      <br />
                      tagaram.kirankumar.cer20@itbhu.ac.in	
                      <br />
                      <br />
                      Anchal Dhar <b>(W)</b>
                      <br />
                      7985967630
                      <br />
                      anchal.dhar.mec21@itbhu.ac.in
                      <br />
                      <br />
                      <b>VICE-CAPTAIN</b>
                      <br />
                      Gurjot
                      <br />
                      7528980380
                      <br />
                      gurjot.student.ece19@itbhu.ac.in
                      <br />
                      <br />
                      Shivanjali Verma <b>(W)</b>
                      <br />
                      8869038250
                      <br />
                      shivanjali.verma.mec19@itbhu.ac.in
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badminton = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BadmintonPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Badminton</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Rishi Kaushik <br />
                    7602961003
                    <br />
                    rishi.kaushik.eee21@itbhu.ac.in	
                    <br />
                    <br />
                    Manisha Bishnoi<b>(W)</b>
                    <br />
                    91668498500
                    <br />
                    manisha.bishnoi.mec21@itbhu.ac.in	 
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Kushagra Yadav
                    <br />
                    8285600365
                    <br />
                    kushagra.yadav.ece19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Basketball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BasketballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Basketball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Pratyaksh Sharma <br />
                    8171354203
                    <br />
                    pratyaksh.sharma.civ21@itbhu.ac.in	
                    <br />
                    <br />
                    Chhaya umbarkar  <b>(W)</b>
                    <br />
                    8409372829
                    <br />
                    chhaya.umbarkar.mst20@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Kinshuk Dwivedi
                    <br />
                    9425183369
                    <br />
                    kinshuk.dwivedi.phy19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Boxing = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BoxingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Boxing</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Suyash Baloni <br />
                    9171946273
                    <br />
                    suyash.baloni.bme20@itbhu.ac.in	 
                    <br />
                    <br />
                    Saloni Agrawal <b>(W)</b>
                    <br />
                    8303077445
                    <br />
                    saloni.agrawal.mat20@itbhu.ac.in	 
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chess = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={ChessPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Chess</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Harshraj Joshi  <br />
                    9548338599
                    <br />
                    harshraj.joshi.che21@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Shaurya Panpalia <br />
                    7877860896
                    <br />
                    shaurya.panpalia.mst19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cricket = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={CricketPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cricket</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Shashank S Prakash <br />
                    8368920987
                    <br />
                    shashanksp.met18@iitbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Satyendra Kumar Satyarthi <br />
                    9877437762
                    <br />
                    satyendraks.rs.cer17@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cycling = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={CyclingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cycling</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p className={`${styles.paragraph}`} style={{ paddingBottom: '15px' }}>
                    <b>CAPTAIN</b>
                    <br />
                    Abhishek 
                    <br />
                    9417044824
                    <br />
                    abhishek.student.cer20@iitbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Aditya Kulkarni
                    <br />
                    8669136556
                    <br />
                    aditya.kulkarni.cd.civ20@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Football = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={FootballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Football</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Soham Nandy <br />
                    9549847995
                    <br />
                    soham.nandy.cd.mst21@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Sachin Kumar <br />
                    6205237836
                    <br />
                    sachin.kumar.met19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Handball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={HandballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Handball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph} ${styles.paragraph1}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Patel Avi <br />
                    8072714518
                    <br />
                    patelavi.nihilkumar.mec21@itbhu.ac.in	
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Tarun Khandelwal <br />
                    8102029500
                    <br />
                    tarun.khandelwal.eee19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hockey = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={HockeyPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Hockey</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Abhishek Meena <br />
                    6265573271
                    <br />
                    abhishek.meena.mec19@itbhu.ac.in	
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Ashish Kumar <br />
                    9370766492
                    <br />
                    ashish.kumar.min19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Kabbadi = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={KabbadiPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kabaddi</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Peddinti Sai siva kumar <br />
                    7354388062
                    <br />
                    peddinti.saiskumar.cer19@itbhu.ac.in
                    <br />
                    <br />
                    Kodurupaka Mallika <b>(W)</b>
                    <br />
                    9177574613
                    <br />
                    kodurupaka.mallika.mec21@itbhu.ac.in	
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Khokho = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={KhoKhoPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kho Kho</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '10px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    yandapalli gireesh reddy
                    <br />
                    8877441658
                    <br />
                    ygireesh.reddy.eee21@itbhu.ac.in
                    <br />
                    <br />
                    Saloni Sharma <b>(W)</b>
                    <br />
                    7770880674
                    <br />
                    saloni.sharma.civ22@itbhu.ac.in	
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Munavath Prashanth
                    <br />
                    6301984558
                    <br />
                    munavath.prashanth.min19@itbhu.ac.in
                    <br />
                    <br />
                    Jayshree Das <b>(W)</b>
                    <br />
                    6000805732
                    <br />
                    jayshree.das.min19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Powerlifting = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={PowerliftingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Powerlifting</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Dhahal Brahma
                    <br />
                    9101401340
                    <br />
                    dhahal.brahma.cer19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Harsh Agrawal <br />
                    9759877847
                    <br />
                    harsh.agrawal.phe20@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Squash = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={SquashPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Squash</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Hemank Vats<br />
                    8331891203
                    <br />
                    hemank.vats.apd20@itbhu.ac.in	
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableTennis = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TableTennisPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Table Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Yashwardhan Sable <br />
                    7073524926
                    <br />
                    yashwardhan.sable.phy20@itbhu.ac.in
                    <br />
                    <br />
                    Guddaji Sri Prada <b>(W)</b>
                    <br />
                    8127141299
                    <br />
                    guddaji.sriprada.cse20@itbhu.ac.in	
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Taekwondo = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TaekwondoPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Taekwondo</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Divyanshu Bharti <br />
                    7737877228
                    <br />
                    divyanshu.bharti.chy21@itbhu.ac.in	
                    <br />
                    <br />
                    Sameeksha Murdia <b>(W)</b>
                    <br />
                    9207970160
                    <br />
                    sameeksha.murdia.phy20@itbhu.ac.in	
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tennis = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TennisPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Baidhar Soren <br />
                    6372843510
                    <br />
                    baidhar.srn@gmail.com
                    <br />
                    <br />
                    Charmitha <b>(W)</b>
                    <br />
                    9666165321
                    <br />
                    charmithakrishna2002@gmail.com
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Volleyball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={VolleyballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Volleyball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '10px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Pawan Kumar <br />
                    8824018065
                    <br />
                    pawan.kumar.ece20@itbhu.ac.in	<br />
                    <br />
                    Boddu Bhavana <b>(W)</b>
                    <br />
                    8076365550
                    <br />
                    boddu.bhavana.mec20@itbhu.ac.in 
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Mukul jaiman <br />
                    8302122511
                    <br />
                    mukul.jaiman.civ19@itbhu.ac.in
                    <br />
                    <br />
                    Priya Rathore <b>(W)</b>
                    <br />
                    8225934951
                    <br />
                    priya.rathore.cer19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeightLifting = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={WeightliftingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Weight Lifting</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph} ${styles.paragraph1}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Harsh Agrawal <br />
                    6350078788
                    <br />
                    harshagrawal789789@gmail.com	
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Uday Kiran <br />
                    78976 10891
                    <br />
                    moningi.udaykiran.mst19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  // Aqautics,
  Athletics,
  Badminton,
  Basketball,
  Boxing,
  // Carrom,
  Chess,
  Cricket,
  Cycling,
  Football,
  Handball,
  Hockey,
  Kabbadi,
  Khokho,
  Powerlifting,
  Squash,
  TableTennis,
  Taekwondo,
  Tennis,
  Volleyball,
  WeightLifting,
};
