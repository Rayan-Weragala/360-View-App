import React, { useState } from "react";
import axios from "axios";

const AddVirtualTour = () => {
  const [selectedImageFiles, setSelectedImageFiles] = useState([]);
  const [selectedMusicFile, setSelectedMusicFile] = useState(null);

  const handleImageChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedImageFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleMusicChange = (event) => {
    setSelectedMusicFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      selectedImageFiles.forEach((file) => {
        formData.append("images", file);
      });
      if (selectedMusicFile) {
        formData.append("music", selectedMusicFile);
      }

      const response = await axios.post(
        "http://localhost:8080/api/images/upload",
        formData,
        console.log(formData),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      // Clear selected files state after successful upload if needed
      setSelectedImageFiles([]);
      setSelectedMusicFile(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">
        Add Images and Music
      </h1>

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
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                multiple // Allow multiple file selection
              />
            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="music" className="block text-gray-700 mb-2">
              Add Music
            </label>
            <input
              type="file"
              id="music"
              onChange={handleMusicChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>

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

export default AddVirtualTour;
