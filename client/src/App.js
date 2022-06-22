import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ButtonAppBar from "./components/ButtonAppBar";

import MediaCard from "./components/MediaCard";
function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<ButtonAppBar />} />

          <Route path="/MediaCard" element={<MediaCard />} />
    

        </Routes>
      </Router>
    </>
  );
}

export default App;
