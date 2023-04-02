/* ANY FRONT END API ENDPOINTS GO HERE */
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  try {
    //search username
    const user = await User.findOne({ username: req.body.username });

    //check if password is the same as in database
    if (user.password === req.body.password) {
      res.render("home", { user }); //direct to homepage
    } else {
      res.send("wrong password"); //inform user wrong password
    }
  } catch {
    res.send("wrong account details"); //inform user wrong account details
  }
});

module.exports = router;
