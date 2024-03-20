import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "../src/Pages/View";
import AddvirtualTour from "../src/Pages/AddvirtualTour";
import ImageBox from "../src/Pages/ImageBox";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/view" element={<View />}></Route>
          <Route path="add" element={<AddvirtualTour />}></Route>
          <Route path="box" element={<ImageBox />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
