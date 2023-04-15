//keeps everything in memory right now
//need to change to implement mongo

const users = [];
//join user to chat, basically jus adds to array right now
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);
  return user;
}

//get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

//user leaves chat
function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

//get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
};
