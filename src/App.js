import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import PageKalkulator from "./PageKalkulator/PageKalkulator";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true, // animasi hanya terjadi sekali
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/simulasi-kredit"
          element={<PageKalkulator />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
