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
      <SphereViewer
        imageUrl={images.length > 0 ? `http://localhost:8080/${images[0]}` : ""}
        imagePaths={images.map((path) => `http://localhost:8080/${path}`)}
      />
    </div>
  );
};

export default View;
