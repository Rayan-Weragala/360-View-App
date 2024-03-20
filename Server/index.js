const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const imageRoutes = require("./Routes/imageRoutes");
const getImage = require("./Routes/getImage");
const getAll  = require("./Routes/getAll")
dotenv.config();

const PORT = process.env.PORT || 8080;



app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/images", imageRoutes);
//app.use("/api/images", getImage);
app.use("/api/images", getAll);

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected successfully!");
});

app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`);
});
app.use("/uploads", express.static("uploads"));

//import model
