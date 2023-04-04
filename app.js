if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const User = require("./models/User");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const formatMessage = require('./routes/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./routes/userChat');

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



const botName = 'Homebase Bot';
//when user connects
io.on("connection", (socket) => {
  socket.on('joinRoom', ({username, room}) => {
  const user = userJoin(socket.id,username, room);
  socket.join(user.room);

    //welcome current user
  socket.emit('message',formatMessage(botName ,'welcome to chat'));

  //broadcast when a user connects
  //broadcast to specific room
  socket.broadcast
    .to(user.room)
    .emit('message',formatMessage(botName ,`${user.username} has joined the chat`));

    //send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });

  });
  
  //listen for chatMessage from main.js
  socket.on('chatMessage', (msg) => {
    const user = getCurrentUser(socket.id);
    
    //emit to everyone in room
    io.to(user.room).emit('message', formatMessage(user.username,msg));
  });

  //runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if(user){
      io.to(user.room).emit('message',formatMessage(botName ,`${user.username} disconnected`));
    }
    //send users and room info when they leave
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
    
  });

  

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

if (process.env.NODE_ENV !== "test") {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to Mongoose"));
}


module.exports = app;

