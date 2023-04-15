/*get form element, socket object, and DOM(document object model) elements
for displaying chat messages, room name, and user list*/
const chatForm = document.getElementById("chat-form");
const socket = io();
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room=name");
const userList = document.getElementById("users");

// get username and room from URL using Qs library
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

//join chatroom
socket.emit("joinRoom", { username, room }); //emit a "joinRoom" event to the server w/ username and room

//get room and users
//listen for the "roomUsers" event from the server, which sends the room and users data
socket.on("roomUsers", ({ room, users }) => {
  //output room name and users to the DOM
  outputRoomName(room);
  outputUsers(users);
});

//message from server
//listen for "message" event from server, which sends a chat message
socket.on("message", (message) => {
  console.log(message);
  //output message to DOM
  outputMessage(message);

  //scroll down to bottom of chat window when theres a message
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//message submit
//listen for a submit event on the chat form
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //get message text from the input element
  const msg = e.target.elements.msg.value;

  // emit message to server
  socket.emit("chatMessage", msg);

  //clear input in text bar and focus on text bar
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

//output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  // check if message contains a link
  if (message.text.includes("http://") || message.text.includes("https://")) {
    // wrap link in anchor tag
    const link = message.text.match(/(http[s]?:\/\/[^\s]+)/gi);
    const text = message.text.replace(
      link,
      `<a href="${link}" target="_blank" class="message-link">${link}</a>`
    );
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
      <p class="text">${text}</p>`;
  } else {
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
      <p class="text">${message.text}</p>`;
  }
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
