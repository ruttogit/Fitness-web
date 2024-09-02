import React from 'react';
import trainer1 from "../../images/couch 1 1.png";
import trainer2 from "../../images/couch 2.png";
import trainer3 from "../../images/couch 3 2.png";
import facebook from "../../icons/facebook-f.svg";
import Instagram from "../../icons/instagram.svg";
import Twiter from "../../icons/twitter.svg";
import "./trainers.css";

function Trainers() {
  return (
    <div className='trainers' id='trainers'>
        <h2 className='title'>Trainers</h2>
        <div className="trainers-card-cont">
            <div className="trainers-cont">
                <img className='trainers-pic' src={trainer1} alt="" />
                <div className="details">
                    <h4 className='special'>John</h4>
                    <div className="scial-icons">
                        <img src={facebook} alt="" />
                        <img src={Twiter} alt="" />
                        <img src={Instagram} alt="" />
                    </div>
                </div>
            </div>
            <div className="trainers-cont">
                <img className='trainers-pic' src={trainer2} alt="" />
                <div className="details">
                    <h4 className='special'>Stanley</h4>
                    <div className="scial-icons">
                        <img src={facebook} alt="" />
                        <img src={Twiter} alt="" />
                        <img src={Instagram} alt="" />
                    </div>
                </div>
            </div>
            <div className="trainers-cont">
                <img className='trainers-pic' src={trainer3} alt="" />
                <div className="details">
                    <h4 className='special'>Anjela</h4>
                    <div className="scial-icons">
                        <img src={facebook} alt="" />
                        <img src={Twiter} alt="" />
                        <img src={Instagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trainers