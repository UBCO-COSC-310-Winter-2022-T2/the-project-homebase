if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false })); // For body parsing
app.use(express.json()); // For JSON body parsing (required for SuperTest testing)

app.get("/", (req, res) => {
  console.log(req.session)
  res.render("index");
});

const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV !== "test") {

  const db = require('./config/database');
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to Mongoose"));

  // Store sessions on MongoDB
  const sessionStore = MongoStore.create({
    client: db.getClient(),
    collectionName: "sessions",
    ttl: 60 * 60 * 24 * 7, // 1 week
  });

  // Session middleware
  app.use(session({ secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 } }));

  const passport = require("./config/passport");
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

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

const userRouter = require("./routes/user");
app.use("/user", userRouter);

module.exports = app;
