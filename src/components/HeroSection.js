import React from 'react';
import Button from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
      <div className="hero-container">
        <video src="videos/video-2.mp4" autoPlay muted loop />
        <h1>Adventure awaits</h1>
        <p>What are you waiting</p>

        <div className="btns">
          <Button setStyle="btn--outline" setSize="btn--large">
            GET STARTED
          </Button>
          <Button setStyle="btn--primary" setSize="btn--large">
            WATCH TRAILER <i className="far fa-play-circle"></i>
          </Button>
        </div>
      </div>
    );
}

export default HeroSection
