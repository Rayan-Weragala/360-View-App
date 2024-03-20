import React, { useState, useEffect } from "react";
import "../CSS/style.css";

const ImageBox = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/images/all");
        const data = await response.json();
        console.log(data);
        
        const imagePaths = data.map((item) => {
          if (item.imagePaths && item.imagePaths.length > 0) {
            return item.imagePaths[0]; 
          } else {
            return item.imagePath; 
          }
        });
        setImages(imagePaths);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="box-container">
      {images.map((imagePath, index) => (
        <div className="box" key={index}>
        
          <img
            src={`http://localhost:8080/${imagePath}`} alt=""/>
        </div>
      ))}
    </div>
  );
};

export default ImageBox;
