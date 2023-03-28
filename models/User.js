const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxLength: 20
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
  bio: {
    type: String,
    default: "",
    maxLength: 200
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
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
