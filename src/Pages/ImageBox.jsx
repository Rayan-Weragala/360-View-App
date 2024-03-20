import React, { useState, useEffect } from "react";
import "../CSS/style.css";
import { Link } from "react-router-dom";

const ImageBox = () => {
  const [images, setImages] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await fetch("http://localhost:8080/api/image/all");
       const data = await response.json();
       console.log(data);

       const imagesData = data.map((item) => ({
         _id: item._id,
         imagePath:
           item.imagePaths && item.imagePaths.length > 0
             ? item.imagePaths[0]
             : item.imagePath,
       }));
       setImages(imagesData);
     } catch (error) {
       console.error("Error fetching data", error);
     }
   };
   fetchData();
 }, []);


  return (
    <div className="box-container">
      {images.map((image, index) => (
        <div className="box" key={index}>
          <Link to={`/view/${image._id}`}>
            <img src={`http://localhost:8080/${image.imagePath}`} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageBox;
