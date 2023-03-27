const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const RoleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#FFFFFF",
  },
});

const ServerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  channels: [ChannelSchema],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  roles: [RoleSchema],
  avatar: {
    type: String,
    default: "", // find a picture for this
  },
});

module.exports = mongoose.model("server", ServerSchema);
