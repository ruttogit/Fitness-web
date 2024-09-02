import React, { useState } from 'react'
import closeIcon from "../../icons/multiply.svg"
import barIcon from "../../icons/bars.svg"
import "./navbar.css"



function Navbar() {
  const [IsOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <div className='nav-container'>
      <h1>Logo</h1>
      <nav>
        <ul className={IsOpen ? 'main-nav active' : 'main-nav'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#membership">Membership Plans</a></li>
          <div className="right-nav">
          <button className='btn'>Join Now</button>
        </div>
        </ul>

      </nav>
      <div className="nav-btns">
        <img src={IsOpen ? closeIcon : barIcon} alt="" onClick={toggleMenu}/>
      </div>      
    </div>
  )
}

export default Navbar