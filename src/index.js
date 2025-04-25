import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
// if (root.hasChildNodes()) {
//   hydrate(App, root)
// } else {
//   render(App, root)
// }

// ServiceWorker.unregister()
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
