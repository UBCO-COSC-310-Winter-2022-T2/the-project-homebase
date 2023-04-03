const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/join", (req, res) => {
    res.render('server/join', { server: req.name });
  });

router.post("/join", async (req, res) => {
    const server = await Server.findOne({ server: req.body.name });
    if (!server) {
      return res.status(404).send("Server not found");
    } else {
        server.members.push(req.user._id);
        await server.save();

        res.redirect(`/server/${server._id}`);
    }
});

  module.exports = router;