const chatForm = document.getElementById("chat-form");
const socket = io();
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room=name");
const userList = document.getElementById("users");

// get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

//join chatroom
socket.emit("joinRoom", { username, room });

//get room and users
socket.on("roomUsers", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

//message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  //scroll down when theres a message
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get message text
  const msg = e.target.elements.msg.value;

  // emit message to server
  socket.emit("chatMessage", msg);

  //clear input in text bar
  e.target.elements.msg.value = "";
  //focus after clearing
  e.target.elements.msg.focus();
});

//output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}

// add room name to EJS template
function outputRoomName(room) {
  const roomNameEl = document.getElementById("room-name");
  roomNameEl.innerHTML = room;
}

// add users to EJS template
function outputUsers(users) {
  const userListEl = document.getElementById("users");
  const userListHtml = users
    .map((user) => `<li>${user.username}</li>`)
    .join("");
  userListEl.innerHTML = userListHtml;
}
