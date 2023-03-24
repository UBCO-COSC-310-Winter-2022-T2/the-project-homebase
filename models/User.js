const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: '' // find a picture for this
    },
    servers: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model('user', UserSchema);
