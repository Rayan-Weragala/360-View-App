const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Image = require("../models/Image");

// Set storage engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max file size
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("images", 6);

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check MIME type
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only!");
  }
}

// Upload image route
router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      // Files uploaded successfully, now you can save the file paths or URLs to the database
      const imagePaths = req.files.map((file) => file.path);
      const promises = imagePaths.map((imagePath) => {
        const newImage = new Image({ imagePath });
        return newImage.save();
      });

      Promise.all(promises)
        .then(() => res.json({ imagePaths }))
        .catch((err) =>
          res.status(500).json({ error: "Failed to save images to database" })
        );
    }
  });
});

module.exports = router;
