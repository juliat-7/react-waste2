import React from 'react';
import './Hero.css';
import waste from "./assets/img/waste.png"

const CombinedHeroComponent = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Better Solutions For The Waste Around You!</h1>
            <h2 className="hero-subtitle">Keep our Environment Healthy</h2>
            <div className="hero-buttons">
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
              <button className="btn-watch-video">
                Watch Video
              </button>
            </div>
          </div>
          
            
            <img src={waste} className="img-fluid animated" alt="Recycling" style={{ width: '300px', height: 'auto' }} />

            
        
        </div>
      </div>
      <div className="hero-container">
        <div className="icon-row">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img 
              key={item} 
              src={`https://www.youtube.com/embed/IsAg-JqJnA8`} 
              alt={`Waste management icon ${item}`}
              className="icon-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CombinedHeroComponent;
























