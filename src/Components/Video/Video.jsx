import React from "react";
import "./Video.css"

const Video = () => {
  return (
    <React.Fragment>
    <div className="video-container">
      <video className="video-player" controls muted>
        <source
          src="https://a-cdn.xpeng.com/www/public/static/vd/x9-p2.64e2c43b.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    </React.Fragment>
  );
};

export default Video;
