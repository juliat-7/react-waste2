import React from 'react';

const VideoComponent = () => {
  return (
    <div className="d-flex justify-content-center justify-content-lg-start">
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
      
      <div className="btn-watch-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IsAg-JqJnA8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
