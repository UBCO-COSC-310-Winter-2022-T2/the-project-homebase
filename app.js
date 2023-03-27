if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const User = require("./models/User");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false })); // For body parsing
app.use(express.json()); // For JSON body parsing (required for SuperTest testing)

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.render("index");
});

/*-------------- ROUTES --------------*/
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

const registerRouter = require("./routes/register");
app.use("/register", registerRouter);

const deleteAccountRouter = require("./routes/deleteAccount");
app.use("/deleteAccount", deleteAccountRouter);

const resetPasswordRouter = require("./routes/resetPassword");
app.use("/resetPassword", resetPasswordRouter);

const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to Mongoose"));

    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;

