import React from 'react'
import image from "../../images/About picture.png"
import "./about.css"
function About() {
  return (
    <>
    <h1 className='title' id='about'>About Us</h1>
      <div className='about container'>
        <div className="about-left">
          <img className='rounded-cornor' src={image} alt="" />
        </div>
        <div className="about-right">
          <div className="our-mission">
            <h3 className='special'>Our Mission</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
          </div>
          <div className="our-mission">
            <h3 className='special'>Our Team</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
          </div>
          <div className="our-mission">
            <h3 className='special'>Our Story</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About