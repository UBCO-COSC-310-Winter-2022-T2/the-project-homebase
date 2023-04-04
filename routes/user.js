/* ANY FRONT END API ENDPOINTS GO HERE */
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

const conn = mongoose.connection;
conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Create storage engine
const storage = new GridFsStorage({
    url: process.env.DATABASE_URL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const fileInfo = {
          filename: file.originalname,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    }
  });
  const upload = multer({ storage });

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/userpage", { user: user });
});

router.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/edit", { user: user });
});

router.post("/edit/:id", upload.single('avatar'), async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
   // Update user avatar and store url of image in database
   user.avatar = `/uploads/${req.file.filename}`; // Update avatar field with file URL
    user.username = req.body.username;
    user.bio = req.body.bio;
    await user.save();
    res.status(200).render("users/userpage", { user: user });
  } catch {
    if (user == null) {
      res.status(404).redirect("/");
    } else {
      res.status(401).render("users/edit", {
        user: user,
        errorMessage: "Error updating user", // TODO - use actual http error codes
      });
    }
  }
});

module.exports = router;
