const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    channelId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    embeds: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('message', MessageSchema);
