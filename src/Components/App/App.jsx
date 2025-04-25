import React from "react";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <div className="container-app">
        <img
          src="https://a-cdn.xpeng.com/www/public/static/img/app-download.4316efe5.png"
          alt=""
          srcset=""
          data-aos="fade-up"
        />
        <div className="quote-app">
          <h2 className="title-app" data-aos="fade-up">
            XPENG App
          </h2>
          <p className="desk-app" data-aos="fade-up">
            Explore the World Intelligently
          </p>
          <div className="parent-btn-app">
            <div className="parent-btn-app">
              <a
                href="https://apps.apple.com/no/app/xpeng/id1538089870" // ganti dengan link App Store asli
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://a-cdn.xpeng.com/www/public/static/img/go-app-store.svg"
                  alt="Download on App Store"
                  className="store-app"
                  data-aos="fade-up"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.xiaopeng.globalcarinfo" // ganti dengan link Google Play asli
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://a-cdn.xpeng.com/www/public/static/img/go-google.svg"
                  alt="Get it on Google Play"
                  className="store-app"
                  data-aos="fade-up"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
