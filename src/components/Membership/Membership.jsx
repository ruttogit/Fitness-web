import React from 'react'
import checkmark from "../../icons/check-circle.svg"


import "./membership.css"
const Membership = () => {
  return (
    <div className='membership' id='membership'>
    <h2 className="title">Membership Plans</h2>
    <div className='membership-container rounded-cornor'>
        <div className="membership-card">
            <h3 className='special'>Basic Plan</h3>
            <h4>Fratures</h4>
            <div className="features">
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Access to gym during non-peak hours.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Participation in select group classes.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Use of locker rooms and showers.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Basic workout tracking via the mobile app.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Access to gym during non-peak hours.</p>
                </div>
                <button className='btn'>Select Plan</button>
                
            </div>
        </div>
        
        <div className="membership-card">
            <h3 className='special'>Standard Plan</h3>
            <h4>Fratures</h4>
            <div className="features">
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Full access to the gym during all operating hours.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Participation in all group classes.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Use of locker rooms and showers.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Access to additional facilities (e.g., sauna, pool.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Basic workout tracking via the mobile app.</p>
                </div>
                <button className='btn'>Select Plan</button>
                
            </div>
        </div>
        <div className="membership-card">
            <h3 className='special'>Basic Plan</h3>
            <h4>Fratures</h4>
            <div className="features">
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>All-inclusive access to the gym</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Participation in select group classes.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Use of locker rooms and showers.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Basic workout tracking via the mobile app.</p>
                </div>
                <div className="feature">
                    <img src={checkmark} alt="" />
                    <p>Basic workout tracking via the mobile app.</p>
                </div>
                <button className='btn'>Select Plan</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Membership