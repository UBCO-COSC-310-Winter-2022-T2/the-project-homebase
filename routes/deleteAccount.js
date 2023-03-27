/* ANY FRONT END API ENDPOINTS GO HERE */
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/", (req, res) => {
    res.render("deleteAccount");
});

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    try {
      // Find the user in the database
      const user = await User.findOne({ username });
      if (!user) {
        // User not found in the database
        return res.status(404).send("User not found");
      }
      // Check if the password is correct
      if (user.password !== password) {
        // Incorrect password
        return res.status(401).send("Incorrect password");
      }
      // Delete the user from the database
      await User.deleteOne({ username });
      // Redirect to the home page
      res.render("index");
    } catch (error) {
      // Handle any errors that may occur
      console.error(error);
      res.status(500).send("Internal server error");
    }
});

module.exports = router;
