import React, { useState, useRef } from "react";
import "./Page1.scss";
import page1Video from "../../assets/video.mp4";
import page1Img from "../../assets/hero-image-01.webp";
import videoPlay from "../../assets/videoPlay.svg";

export const Page1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="page1">
      <div className="page1__inner">
        <h1 className="page1__title">Landing template for startups</h1>
        <p className="page1__text">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="page1__buttons">
          <button className="page1__button1">Start free trial</button>
          <button className="page1__button2">Learn more</button>
        </div>
        <div className="page1__video">
          <video
            controls
            poster={page1Img}
            className="page1__video-img"
            ref={videoRef}
          >
            <source src={page1Video} type="video/mp4" />
          </video>
          <div className="page1__play-button" onClick={togglePlay}>
            <img
              src={videoPlay}
              alt="videoPlay"
              className={!isPlaying ? "page1__play-icon" : "page1__pause-icon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
