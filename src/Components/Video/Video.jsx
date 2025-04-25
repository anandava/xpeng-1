import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="video-container">
      <video
        className="video-player"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source
          src="https://a-cdn.xpeng.com/www/public/static/vd/x9-p2.64e2c43b.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
