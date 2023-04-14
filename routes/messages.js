const moment = require("moment");

//returns formatted message object w/ a timestamp
function formatMessage(username, text) {
  return {
    username, //set username property
    text, //set text property
    time: moment().format("h:mm a"), //set time property
  };
}

module.exports = formatMessage;
