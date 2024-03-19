import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./View";
import AddvirtualTour from "./AddvirtualTour";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/view" element={<View />}></Route>
          <Route path="add" element={<AddvirtualTour />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
