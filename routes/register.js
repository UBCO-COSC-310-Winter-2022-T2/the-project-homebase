/* ANY FRONT END API ENDPOINTS GO HERE */
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/", (req, res) => {
    res.render("registerPage");
});

router.post("/", async (req, res) => {
    //get data from form
  
    console.log(req.body.username);
  
    const data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    // check if user already exists
    const user = await User.findOne({ email: data.email });
    if (user) {
      res.status(400).send("User already exists");
      return;
    }
  
    //give data to mongo
    //if have time should probably hash the password
    await User.insertMany([data]);
  
    //redirect to homepage
    res.status(200).render("index");
});

module.exports = router;
