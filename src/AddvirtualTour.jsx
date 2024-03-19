import React, { useState } from "react";
import axios from "axios";

const AddvirtualTour = () => {
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append("images", image); // Append images with the same key
    });

    try {
      const response = await axios.post(
        "http://localhost:8080/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Images uploaded:", response.data);
      
      // Reset images state if needed
      setImages([]);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">Add Images</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Loop through and render multiple input fields */}
          {[1, 2, 3, 4].map((index) => (
            <div className="mb-4" key={index}>
              <label
                htmlFor={`image${index}`}
                className="block text-gray-700 mb-2"
              >
                Add Image {index}
              </label>
              <input
                type="file"
                id={`image${index}`}
                name={`image${index}`}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:bg-teal-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddvirtualTour;
