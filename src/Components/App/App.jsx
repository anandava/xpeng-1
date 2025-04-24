import React from "react";
import "./App.css"

const App = () => {
  return (
    <React.Fragment>
      <div className="container-app">
        <img
          src="https://a-cdn.xpeng.com/www/public/static/img/app-download.4316efe5.png"
          alt=""
          srcset=""
        />
        <div className="quote-app">
          <h2 className="title-app">XPENG App</h2>
          <p className="desk-app">Explore the World Intelligently</p>
          <div className="parent-btn-app">
            <img
              src="https://a-cdn.xpeng.com/www/public/static/img/go-app-store.svg"
              alt=""
              className="store-app"
            />
            <img
              src="https://a-cdn.xpeng.com/www/public/static/img/go-google.svg"
              alt=""
              className="store-app"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
