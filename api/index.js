import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser());

/* Save and download file
const http = require('http');
const https = require('https');
const fs = require('fs');

const imageUrl = 'https://example.com/image.jpg';

const fileName = Date.now() + imageUrl.substring(imageUrl.lastIndexOf('/')+1);

// Make a request to the image URL
const request = https.get(imageUrl, function(response) {
  // Create a write stream to save the image
  const file = fs.createWriteStream(`../client/public/upload/${fileName}`);
  response.pipe(file);
  // Respond with the filename once the image is saved
  file.on('finish', function() {
    file.close();
    res.status(200).json(fileName);
  });
}).on('error', function(err) {
  fs.unlink(`../client/public/upload/${fileName}`, function() {
    console.error(err);
    res.status(500).send("Failed to save image");
  });
});*/


const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null,"../client/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
});
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800,() => {
    console.log("Connnected!")
});