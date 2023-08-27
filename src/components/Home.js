import React from 'react'
import { Button } from './Button'
import './Home.css'
import '../App.css'
const Home = () => {
  return (
    <>
    <div className='home-container'>
      <video src='D:\ifraheem\react\first-app\src\public1\videos\video-2.mp4' autoPlay loop muted />
        <h1> ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
        <Button
           className='btns'
          buttonSize='btn--large'
          buttonStyle='btn--outline'
          >
            GET STARTED
          </Button>
          <Button
           className='btns'
          buttonSize='btn--large'
          >
            WATCH TRAILER <i className='far fa-play-circle'/>
          </Button>
        </div>
    </div>
    
    </>
  )
}

export default Home