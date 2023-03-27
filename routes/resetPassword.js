/* ANY FRONT END API ENDPOINTS GO HERE */
const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const User = require("../models/User");
const Server = require("../models/Server");
const Message = require("../models/Message");

router.get("/", (req, res, next) => {
    res.render("resetPassword");
});

router.post("/", async (req, res, next) => {
    const { email } = req.body;

    try {
        //check if user exists in database
        const user = await User.findOne({ email });
        if (!user) {
        res.send("user not registered");
        return;
        }

        //user exists create one time link for 15 minutes
        const secret = JWT_SECRET + user.password; //unique for each user
        const payload = {
        email: user.email,
        id: user.id,
        };
        const token = jwt.sign(payload, secret, { expiresIn: "15m" });
        const link = `http://localhost:3000/resetPassword/${user.id}/${token}`;
        console.log(link); //should actually send link to client. for right now just sending it to the console
        res.send("Password Reset link has been sent to your email");
    } catch {
        res.send("error");
    }
});

router.get("/:id/:token", async (req, res, next) => {
const { id, token } = req.params;

//check if id exists in the database
const user = await User.findOne({ id });
if (!user) {
    res.send("invalid ID");
    return;
}

//we have valid id, and valid user with this id
const secret = JWT_SECRET + user.password;
try {
    const payload = jwt.verify(token, secret);
    res.render("resetPassword", { email: user.email });
} catch (error) {
    console.log(error.message);
    res.send(error.message);
}
});

router.post("/:id/:token", async (req, res, next) => {
    const { id, token } = req.params;
    const { password, password2 } = req.body;
    const user = await User.findOne({ id });

    //check if id exists in database
    if (!user) {
        res.send("inalid ID");
        return;
    }

    //verify token
    const secret = JWT_SECRET + user.password;
    try {
        const payload = jwt.verify(token, secret);

        //validate password and password2 match
        if (password !== password2) {
        res.send("Passwords do not match");
        return;
        }
        //find user with payload email and id and update with new password
        //hash password if we are going to do that?
        user.password = password;
        await user.save();
        res.render("index");
    } catch (error) {
        //invalid token
        console.log(error.message);
        res.send(error.message);
    }
});

module.exports = router;
