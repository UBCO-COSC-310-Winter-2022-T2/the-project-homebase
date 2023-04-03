const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/join", (req, res) => {
    res.render('server/join');
  });

  module.exports = router;