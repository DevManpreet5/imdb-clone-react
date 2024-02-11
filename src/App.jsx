import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Series from "./components/Series";
import People from "./components/People";
import Tvdetails from "./components/Tvdetails";
import Moviesdetails from "./components/Moviesdetails";
import Peopledetails from "./components/Peopledetails";

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies></Movies>} />
        <Route path="/shows" element={<Series></Series>} />
        <Route path="/person" element={<People></People>} />
        <Route path="/tv/details/:id" element={<Tvdetails></Tvdetails>} />
        <Route
          path="/movie/details/:id"
          element={<Moviesdetails></Moviesdetails>}
        />
        <Route
          path="/person/details/:id"
          element={<Peopledetails></Peopledetails>}
        />
      </Routes>
    </div>
  );
}

export default App;
