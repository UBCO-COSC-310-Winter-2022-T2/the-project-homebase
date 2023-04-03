/* ANY FRONT END API ENDPOINTS GO HERE */
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/userpage", { user: user });
});

router.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/edit", { user: user });
});

router.post("/edit/:id", async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    //TODO - Update user avatar and store url of image in database
    user.avatar = req.body.avatar;
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
