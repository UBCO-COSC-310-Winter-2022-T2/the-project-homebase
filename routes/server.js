const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/:id", async (req, res) => {
    const server = await Server.findById(req.params.id);
    res.render("users/userpage", { server: server });
});

router.get("new", async (req, res) => {
    res.render("/new");
});

router.post("new", async (req, res) => {
    const server = new Server({
        name: req.body.name,
    });
    try {
        await server.save();
        res.redirect(`/server/${server.id}`);
    } catch {
        res.render("/new", {
            server: server,
            errorMessage: "Error creating server",
        });
    }
});
