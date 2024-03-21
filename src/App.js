import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "../src/Pages/View";
import AddvirtualTour from "../src/Pages/AddvirtualTour";
import ImageBox from "../src/Pages/ImageBox";
import Home from "../src/Pages/Home"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/add" element={<AddvirtualTour />}></Route>
          <Route path="/box" element={<ImageBox />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
