const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "", // find a picture for this
  },
  servers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Server",
    },
  ],
});

// module.exports = mongoose.model('user', UserSchema);
const collection = new mongoose.model("user", UserSchema);
module.exports = collection;
