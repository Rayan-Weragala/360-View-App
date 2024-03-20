import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SphereViewer from "./SphereViewer";

const View = () => {
  const [images, setImages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchImagesById = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/image/${id}`);
        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data.imagePaths)) {
          setImages(data.imagePaths);
          console.log(data.imagePaths);
        } else {
          setImages([data.imagePaths]);
          console.log(data.imagePaths);
        }
        
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImagesById();
  }, [id]);

  return (
    <div className="container">
      {images.map((imagePath, index) => (
        
        <img key={index} src={`http://localhost:8080/${imagePath}`} alt="" />
      ))}
    </div>
  );
};

export default View;
