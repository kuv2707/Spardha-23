import React from 'react'
import './MiddleSection.css'
import { NavHashLink } from 'react-router-hash-link';
import Date1 from '../DaysLeft/DaysLeft';
function Mid() {
  return (
    <div>

      <div className="container-home">
        <div className="left-box">
          <div className="heading1">SPARDHA 2023 <br />
          <div className='subheading1'>MOULDING CHAMPIONS</div></div>
          <div className="description">Annual sports festival of IIT (BHU) under the Games and Sports Council.</div>

          <div className="button-container">
          <NavHashLink
                        to="/register/signup#register"><button className="btn1">LOGIN&nbsp;/&nbsp;SIGNUP</button></NavHashLink>


        
<NavHashLink   to="/events#events">    <button className="btn2">MATCHES</button></NavHashLink>

          </div>
        </div>
        <div className="right-box">
          <div className='card'>
            <div className='cdate'>{Date1()}</div>
            <div className='ctext'>Days Remaining</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mid;