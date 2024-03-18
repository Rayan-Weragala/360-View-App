import React from "react";
import SphereViewer from "./SphereViewer";
import imageUrl1 from "./images/forest.jpg"; // Assuming imageUrl1 and imageUrl2 are imported from different files
import imageUrl2 from "./images/photo2.jpg";

function App() {
  return (
    <div className="App">
      
      <div className="container">
        <SphereViewer imageUrl={imageUrl2} />
      </div>
    </div>
  );
}

export default App;
