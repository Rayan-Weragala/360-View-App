import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGalleryItem from "./ImageGalleryItem"; // Assuming you have a component for individual gallery items

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/images"); 
        const uniqueImageIds = [
          ...new Set(response.data.map((image) => image.documentId)),
        ];
        const filteredImages = response.data.filter((image) =>
          uniqueImageIds.includes(image.documentId)
        );
        setImages(filteredImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {loading ? (
        <p>Loading...</p>
      ) : (
        images.map((image, index) => (
          <ImageGalleryItem key={index} imageUrl={image.imageUrl} />
        ))
      )}
    </div>
  );
};

export default ImageGallery;
