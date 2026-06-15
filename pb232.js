const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const app = express();


// Multer Storage
const storage = multer.diskStorage({

    destination: function(req, file, cb){

        cb(null, "uploads");

    },

    filename: function(req, file, cb){

        cb(null, Date.now() + path.extname(file.originalname));

    }

});


// Upload Middleware
const upload = multer({ storage: storage });


// Home Page
app.get("/", (req, res) => {

    res.send(`

        <h2>Upload Image</h2>

        <form action="/upload" method="post" enctype="multipart/form-data">

            <input type="file" name="mypic">

            <br><br>

            <button type="submit">
                Upload
            </button>

        </form>

    `);

});


// Upload Route
app.post("/upload", upload.single("mypic"), async (req, res) => {

    const filepath = req.file.path;

    const filename = path.parse(req.file.filename).name;

    // Small Size
    await sharp(filepath)

        .resize(100, 100)

        .toFile(`uploads/${filename}-small.jpg`);


    // Medium Size
    await sharp(filepath)

        .resize(300, 300)

        .toFile(`uploads/${filename}-medium.jpg`);


    // Large Size
    await sharp(filepath)

        .resize(600, 600)

        .toFile(`uploads/${filename}-large.jpg`);


    res.send(`

        <h2>
            Image Uploaded and Resized Successfully
        </h2>

        <p>Small, Medium and Large images created.</p>

    `);

});


// Server
app.listen(3050, () => {

    console.log("Server running on port 3050");

});