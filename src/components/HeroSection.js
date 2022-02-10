import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <video src='/videos/video-3.mp4' autoPlay loop muted />
     {/* <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/UoHcKjc_Z3Y?autoplay=1&amp;mute=1&amp;controls=0&amp;origin=https%3A%2F%2Fwww.amagi.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;loop=1&amp;playlist=UoHcKjc_Z3Y&amp;enablejsapi=1&amp;widgetid=3"></iframe> */}
     
   <div className='hero-btns'>

    <h2>We bring together content owners and video platforms to
     <h1>THRIVE</h1>in the new world. A multi-screen world.</h2>
     
     

        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
