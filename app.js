if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const User = require("./models/User");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const formatMessage = require("./routes/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./routes/userChat");

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
//move to routes after
app.get("/chatRooms", (req, res) => {
  res.render("chatRooms");
});

app.get("/chat", async (req, res) => {
  res.render("chat");
});

app.post("/chat", async (req, res) => {
  const { username, room } = req.body;

  res.redirect(`/chat?username=${username}&room=${room}`);
});

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

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const botName = "Homebase Bot";

//when user connects
//listen for a new socket connection
io.on("connection", (socket) => {
  //when a user joins a room
  socket.on("joinRoom", ({ username, room }) => {
    //add user to the users array and join the room
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);

    //welcome current user
    socket.emit("message", formatMessage(botName, "welcome to chat"));

    //broadcast to the room when a user joins
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    //send the room name and user list to all users in the room
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  //listen for chatMessage(main.js) from a user
  socket.on("chatMessage", (msg) => {
    //get the current user and emit the message to everyone in room
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  //listen for a socket disconnect
  socket.on("disconnect", () => {
    //remove the user from the users array and emit a message to the room
    const user = userLeave(socket.id);
    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} disconnected`)
      );
    }
    //send the updated room user list to all users in the room
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // socket.on("chat message", (msg) => {
  //   console.log("message: " + msg);
  //   io.emit("chat message", msg);
  // });
});

if (process.env.NODE_ENV !== "test") {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to Mongoose"));
}

module.exports = app;
