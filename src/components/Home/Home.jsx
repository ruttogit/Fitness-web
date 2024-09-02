import React from 'react'
import heroimg1 from "../../images/Hero.png"
import "./home.css"

function Home() {
  return (
    <div className='hero' id='home'>
      <div className="hero-left">
        <h1>Transform Your <span className='special'>Body</span>, Transform Your <span className='special'>Life</span></h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <button className='btn hero-btn'>Join Now</button>
      </div>
      <div className="hero-right">
        <img src={heroimg1} alt="" />
      </div>
    </div>
  )
}

export default Home