import React, { useState } from "react";
import axios from "axios";

const AddvirtualTour = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post(
        "http://localhost:8080/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      // Clear selected files state after successful upload if needed
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">Add Images</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={`image${index}`}
                className="block text-gray-700 mb-2"
              >
                Add Image {index}
              </label>
              <input
                type="file"
                id={`image${index}`}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                multiple // Allow multiple file selection
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
