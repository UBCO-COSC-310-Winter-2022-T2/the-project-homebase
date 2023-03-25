const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    serverId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Server'
    },
    channelId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    embeds: [{
        type: String
    }]
});

module.exports = mongoose.model('message', MessageSchema);
