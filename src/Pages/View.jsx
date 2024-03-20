import React from "react";
import SphereViewer from "./SphereViewer";
import image from "../images/photo2.jpg";

const View = () => {
  return (
    <div className="container">
      <SphereViewer imageUrl={image} />
    </div>
  );
};

export default View;
